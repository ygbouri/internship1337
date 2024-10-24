/*
  Warnings:

  - You are about to drop the `_articleTocommande` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `commande` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_articleTocommande" DROP CONSTRAINT "_articleTocommande_A_fkey";

-- DropForeignKey
ALTER TABLE "_articleTocommande" DROP CONSTRAINT "_articleTocommande_B_fkey";

-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_id_user_fkey";

-- DropForeignKey
ALTER TABLE "commande" DROP CONSTRAINT "commande_id_user_fkey";

-- DropTable
DROP TABLE "_articleTocommande";

-- DropTable
DROP TABLE "cart";

-- DropTable
DROP TABLE "commande";
