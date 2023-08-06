import { Module } from '@nestjs/common';
import { ComicService } from './services';
import { ComicResolver } from './resolvers';
import { SharedModule } from 'src/shared';

@Module({
  imports: [SharedModule],
  providers: [ComicResolver, ComicService],
})
export class ComicModule {}
