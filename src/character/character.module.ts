import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared';
import { CharacterService } from './services';
import { CharacterResolver } from './resolvers';

@Module({
  imports: [SharedModule],
  providers: [CharacterResolver, CharacterService],
})
export class CharacterModule {}
