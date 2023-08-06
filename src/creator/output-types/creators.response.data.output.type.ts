import { Field, ObjectType } from '@nestjs/graphql';
import { BaseResponseDataOutputType } from 'src/shared';
import { CreatorOutputType } from './creator.output.type';

@ObjectType()
export class CreatorsResponseDataOutputType extends BaseResponseDataOutputType {
  @Field(() => [CreatorOutputType])
  results: CreatorOutputType[];
}
