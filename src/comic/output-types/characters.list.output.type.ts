import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CharacterSummaryOutputType {
  @Field(() => String)
  resourceURI: string;
  @Field(() => String)
  name: string;

  @Field(() => String)
  role: string;
}

@ObjectType()
export class CharactersListOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [CharacterSummaryOutputType])
  items: CharacterSummaryOutputType[];

  @Field(() => Int)
  returned: number;
}
