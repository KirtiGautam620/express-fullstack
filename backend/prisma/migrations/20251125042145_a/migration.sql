/*
  Warnings:

  - You are about to drop the column `book_id` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `ISBN` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `_BookToGenre` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[bookId]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Author` DROP FOREIGN KEY `Author_book_id_fkey`;

-- DropForeignKey
ALTER TABLE `_BookToGenre` DROP FOREIGN KEY `_BookToGenre_A_fkey`;

-- DropForeignKey
ALTER TABLE `_BookToGenre` DROP FOREIGN KEY `_BookToGenre_B_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `book_id`,
    ADD COLUMN `bookId` INTEGER NOT NULL,
    MODIFY `date_of_death` DATETIME(3) NULL,
    MODIFY `lifespan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `ISBN`,
    ADD COLUMN `authorId` INTEGER NOT NULL,
    ADD COLUMN `isbn` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_BookToGenre`;

-- CreateTable
CREATE TABLE `GenreonBook` (
    `bookId` INTEGER NOT NULL,
    `genreId` INTEGER NOT NULL,

    PRIMARY KEY (`bookId`, `genreId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Author_bookId_key` ON `Author`(`bookId`);

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenreonBook` ADD CONSTRAINT `GenreonBook_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenreonBook` ADD CONSTRAINT `GenreonBook_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
