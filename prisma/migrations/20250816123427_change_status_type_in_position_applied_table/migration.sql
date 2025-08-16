/*
  Warnings:

  - You are about to alter the column `status` on the `position_applied` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `position_applied` MODIFY `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL;
