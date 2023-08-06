import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ComicResponseDataOutputType } from './comic.response.data.output.type';

@ObjectType()
export class ComicResponseOutputType {
  @Field(() => Int)
  code: number;

  @Field(() => String)
  status: string;

  @Field(() => String)
  copyright: string;

  @Field(() => String)
  attributionText: string;

  @Field(() => String)
  attributionHTML: string;

  @Field(() => String)
  etag: string;

  @Field(() => ComicResponseDataOutputType)
  data: ComicResponseDataOutputType;
}
