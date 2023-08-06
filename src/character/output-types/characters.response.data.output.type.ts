import { Field, ObjectType } from '@nestjs/graphql';
import { BaseResponseDataOutputType } from 'src/shared';
import { CharactersOutputType } from './characters.output.type';

@ObjectType()
export class CharactersResponseDataOutputType extends BaseResponseDataOutputType {
  @Field(() => [CharactersOutputType])
  results: CharactersOutputType[];
}
