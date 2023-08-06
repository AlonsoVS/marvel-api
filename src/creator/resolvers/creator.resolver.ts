import { Query, Resolver } from '@nestjs/graphql';
import { CreatorService } from '../services';
import { CreatorsResponseOutputType } from '../output-types';

@Resolver()
export class CreatorResolver {
  constructor(private creatorService: CreatorService) {}

  @Query(() => CreatorsResponseOutputType)
  getAllCreators() {
    return this.creatorService.getAll();
  }
}
