/*
  Warnings:

  - You are about to drop the column `gamesId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `gameCreation` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "gamesId";

-- AlterTable
ALTER TABLE "Games" DROP COLUMN "categories",
DROP COLUMN "gameCreation";

-- CreateTable
CREATE TABLE "_GameCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameCategories_AB_unique" ON "_GameCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_GameCategories_B_index" ON "_GameCategories"("B");

-- AddForeignKey
ALTER TABLE "_GameCategories" ADD CONSTRAINT "_GameCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GameCategories" ADD CONSTRAINT "_GameCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Games"("id") ON DELETE CASCADE ON UPDATE CASCADE;
