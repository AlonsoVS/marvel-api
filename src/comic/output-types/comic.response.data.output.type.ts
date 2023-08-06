import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { ComicOutputType } from './comic.output.type';

@ObjectType()
export class ComicResponseDataOutputType {
  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  count: number;

  @Field(() => ComicOutputType)
  results: ComicOutputType[];
}
