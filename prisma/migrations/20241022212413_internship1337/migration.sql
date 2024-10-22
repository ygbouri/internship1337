-- CreateEnum
CREATE TYPE "etat_article" AS ENUM ('NEW', 'USED');

-- CreateEnum
CREATE TYPE "commande_status" AS ENUM ('EN_ATTENTE', 'CONFIRMEE', 'EXPEDIEE', 'LIVREE', 'ANNULEE');

-- CreateEnum
CREATE TYPE "genre" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('OWNER', 'ADMIN', 'CLIENT');

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article" (
    "id_article" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "name_article" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "quantite_stock" INTEGER NOT NULL,
    "quantite_minimal" INTEGER DEFAULT 0,
    "prix_TVA" DOUBLE PRECISION NOT NULL,
    "prix_achat" DOUBLE PRECISION NOT NULL,
    "prix_remise" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "image" TEXT[],
    "description" TEXT NOT NULL,
    "small_description" TEXT NOT NULL,
    "etat" "etat_article" NOT NULL,
    "marque" TEXT NOT NULL,
    "new_nbr_days" INTEGER NOT NULL,
    "OrdreAffichage" INTEGER DEFAULT 0,
    "lot" TEXT DEFAULT '',
    "id_fournisseur" TEXT NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id_article")
);

-- CreateTable
CREATE TABLE "commande" (
    "id_commande" TEXT NOT NULL,
    "status" "commande_status" NOT NULL DEFAULT 'EN_ATTENTE',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "address_livraison" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "commande_pkey" PRIMARY KEY ("id_commande")
);

-- CreateTable
CREATE TABLE "cart" (
    "idCart" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "items" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("idCart")
);

-- CreateTable
CREATE TABLE "user" (
    "id_user" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "password" TEXT,
    "telephone" TEXT DEFAULT '',
    "address" TEXT DEFAULT '',
    "image" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" "user_role" NOT NULL,
    "ville" TEXT DEFAULT '',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "categorie" (
    "id_categorie" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ImageCouverture" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "categorie_pkey" PRIMARY KEY ("id_categorie")
);

-- CreateTable
CREATE TABLE "sous_categorie" (
    "id_souscategorie" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ImageCouverture" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_categorie" TEXT NOT NULL,

    CONSTRAINT "sous_categorie_pkey" PRIMARY KEY ("id_souscategorie")
);

-- CreateTable
CREATE TABLE "_articleTocommande" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_articleTouser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_articleTosous_categorie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "session_sid_key" ON "session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "article_reference_key" ON "article"("reference");

-- CreateIndex
CREATE UNIQUE INDEX "cart_id_user_key" ON "cart"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "user_login_key" ON "user"("login");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categorie_name_key" ON "categorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "sous_categorie_name_key" ON "sous_categorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_articleTocommande_AB_unique" ON "_articleTocommande"("A", "B");

-- CreateIndex
CREATE INDEX "_articleTocommande_B_index" ON "_articleTocommande"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_articleTouser_AB_unique" ON "_articleTouser"("A", "B");

-- CreateIndex
CREATE INDEX "_articleTouser_B_index" ON "_articleTouser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_articleTosous_categorie_AB_unique" ON "_articleTosous_categorie"("A", "B");

-- CreateIndex
CREATE INDEX "_articleTosous_categorie_B_index" ON "_articleTosous_categorie"("B");

-- AddForeignKey
ALTER TABLE "commande" ADD CONSTRAINT "commande_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sous_categorie" ADD CONSTRAINT "sous_categorie_id_categorie_fkey" FOREIGN KEY ("id_categorie") REFERENCES "categorie"("id_categorie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTocommande" ADD CONSTRAINT "_articleTocommande_A_fkey" FOREIGN KEY ("A") REFERENCES "article"("id_article") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTocommande" ADD CONSTRAINT "_articleTocommande_B_fkey" FOREIGN KEY ("B") REFERENCES "commande"("id_commande") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTouser" ADD CONSTRAINT "_articleTouser_A_fkey" FOREIGN KEY ("A") REFERENCES "article"("id_article") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTouser" ADD CONSTRAINT "_articleTouser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTosous_categorie" ADD CONSTRAINT "_articleTosous_categorie_A_fkey" FOREIGN KEY ("A") REFERENCES "article"("id_article") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_articleTosous_categorie" ADD CONSTRAINT "_articleTosous_categorie_B_fkey" FOREIGN KEY ("B") REFERENCES "sous_categorie"("id_souscategorie") ON DELETE CASCADE ON UPDATE CASCADE;
