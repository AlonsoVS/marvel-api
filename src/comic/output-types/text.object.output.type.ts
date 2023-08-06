import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TextObjectOutputType {
  @Field(() => String)
  type: string;

  @Field(() => String)
  language: string;

  @Field(() => String)
  text: string;
}
