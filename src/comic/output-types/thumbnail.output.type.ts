import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ThumbnailOutputType {
  @Field(() => String)
  path: string;

  @Field(() => String)
  extension: string;
}
