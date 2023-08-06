import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  ComicListOutputType,
  EventsOutputType,
  ResponseURLOutputType,
  SeriesOutputType,
  StoriesOutputType,
  ThumbnailOutputType,
} from 'src/shared';

@ObjectType()
export class CharactersOutputType {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String)
  modified: string;

  @Field(() => String)
  resourceURI: string;

  @Field(() => [ResponseURLOutputType])
  urls: ResponseURLOutputType[];

  @Field(() => SeriesOutputType)
  series: SeriesOutputType;

  @Field(() => ThumbnailOutputType)
  thumbnail: ThumbnailOutputType;

  @Field(() => StoriesOutputType)
  stories: StoriesOutputType;

  @Field(() => EventsOutputType)
  events: EventsOutputType;

  @Field(() => ComicListOutputType)
  comics: ComicListOutputType;
}
