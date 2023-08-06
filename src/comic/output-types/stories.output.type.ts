import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StoriesItemOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;
}

@ObjectType()
export class StoriesOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [StoriesItemOutputType])
  items: StoriesItemOutputType[];

  @Field(() => Int)
  returned: number;
}
