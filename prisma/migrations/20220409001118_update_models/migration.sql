/*
  Warnings:

  - Added the required column `userId` to the `BookMark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookMark" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "BookMark" ADD CONSTRAINT "BookMark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
