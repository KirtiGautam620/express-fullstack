/*
  Warnings:

  - You are about to drop the column `bookId` on the `Author` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Author_bookId_key` ON `Author`;

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `bookId`;
