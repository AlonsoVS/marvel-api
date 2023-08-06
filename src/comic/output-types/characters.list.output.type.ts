import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CharacterSummaryOutputType {
  @Field(() => String, { nullable: true })
  resourceURI: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
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
