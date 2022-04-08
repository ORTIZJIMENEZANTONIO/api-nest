import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BookMarkModule } from './bookmark/bookmark.module';


@Module({
  imports: [AuthModule, UserModule, PrismaModule, BookMarkModule],
})
export class AppModule {}
