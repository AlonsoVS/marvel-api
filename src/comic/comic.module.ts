import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ComicService } from './services';
import { ComicResolver } from './resolvers';

@Module({
  imports: [HttpModule],
  providers: [ComicResolver, ComicService],
})
export class ComicModule {}
