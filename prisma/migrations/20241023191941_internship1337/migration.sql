/*
  Warnings:

  - You are about to drop the column `ImageCouverture` on the `categorie` table. All the data in the column will be lost.
  - You are about to drop the column `ImageCouverture` on the `sous_categorie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categorie" DROP COLUMN "ImageCouverture";

-- AlterTable
ALTER TABLE "sous_categorie" DROP COLUMN "ImageCouverture";
