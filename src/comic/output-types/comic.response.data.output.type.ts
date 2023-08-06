import { Field, ObjectType } from '@nestjs/graphql';
import { ComicOutputType } from './comic.output.type';
import { BaseResponseDataOutputType } from 'src/shared';

@ObjectType()
export class ComicResponseDataOutputType extends BaseResponseDataOutputType {
  @Field(() => [ComicOutputType])
  results: ComicOutputType[];
}
