import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatorsItem {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  role: string;
}

@ObjectType()
export class CreatorsOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [CreatorsItem])
  items: CreatorsItem[];

  @Field(() => Int)
  returned: number;
}
