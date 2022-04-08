import { Module } from '@nestjs/common';
import { BookMarkService } from './bookmark.service';

@Module({
  providers: [BookMarkService]
})
export class BookMarkModule {

}