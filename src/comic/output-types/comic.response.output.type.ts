import { ObjectType } from '@nestjs/graphql';
import { ComicResponseDataOutputType } from './comic.response.data.output.type';
import { BaseResponseOutputType } from 'src/shared';

@ObjectType()
export class ComicResponseOutputType extends BaseResponseOutputType(
  ComicResponseDataOutputType,
) {}
