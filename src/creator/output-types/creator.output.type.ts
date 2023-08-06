import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  ComicListOutputType,
  EventsOutputType,
  ResponseURLOutputType,
  SeriesSummaryOutputType,
  StoriesOutputType,
  ThumbnailOutputType,
} from 'src/shared';

@ObjectType()
export class SeriesList {
  @Field(() => Int)
  available: number;

  @Field(() => Int)
  returned: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [SeriesSummaryOutputType])
  items: SeriesSummaryOutputType[];
}

@ObjectType()
export class CreatorOutputType {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  middleName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  suffix: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  modified: string;

  @Field(() => String)
  resourceURI: string;

  @Field(() => [ResponseURLOutputType])
  urls: ResponseURLOutputType[];

  @Field(() => SeriesList)
  series: SeriesList;

  @Field(() => ThumbnailOutputType)
  thumbnail: ThumbnailOutputType;

  @Field(() => StoriesOutputType)
  stories: StoriesOutputType;

  @Field(() => EventsOutputType)
  events: EventsOutputType;

  @Field(() => ComicListOutputType)
  comics: ComicListOutputType;
}
