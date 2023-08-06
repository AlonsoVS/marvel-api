import { Query, Resolver } from '@nestjs/graphql';
import { CharacterService } from '../services';
import { map } from 'rxjs';
import { CharactersResponseOutputType } from '../output-types';

@Resolver()
export class CharacterResolver {
  constructor(private characterService: CharacterService) {}

  @Query(() => CharactersResponseOutputType)
  getAllCharacters() {
    return this.characterService.getAll().pipe(
      map((response) => {
        console.log('Response: ', response);
        return response;
      }),
    );
  }
}
