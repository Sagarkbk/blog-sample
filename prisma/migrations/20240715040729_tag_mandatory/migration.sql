/*
  Warnings:

  - Made the column `tag` on table `Blog` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "tag" SET NOT NULL;
