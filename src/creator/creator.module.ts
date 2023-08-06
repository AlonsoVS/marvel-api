import { Module } from '@nestjs/common';
import { CreatorResolver } from './resolvers';
import { CreatorService } from './services';
import { SharedModule } from 'src/shared';

@Module({
  imports: [SharedModule],
  providers: [CreatorResolver, CreatorService],
})
export class CreatorModule {}
