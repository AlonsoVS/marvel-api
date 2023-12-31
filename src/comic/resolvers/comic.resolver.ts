import { Query, Resolver } from '@nestjs/graphql';
import { ComicResponseOutputType } from '../output-types';
import { ComicService } from '../services';

@Resolver()
export class ComicResolver {
  constructor(private comicService: ComicService) {}

  @Query(() => ComicResponseOutputType)
  getAllComics() {
    return this.comicService.getAll();
  }
}
