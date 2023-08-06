import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SeriesOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;
}
