/*
  Warnings:

  - You are about to drop the column `autorId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_autorId_fkey`;

-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `Post`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `autorId`;
