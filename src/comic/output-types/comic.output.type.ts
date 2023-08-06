import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { CreatorsOutputType } from './creators.output.type';
import { CharactersListOutputType } from './characters.list.output.type';
import { TextObjectOutputType } from './text.object.output.type';
import {
  ComicSummaryOutputType,
  EventsOutputType,
  ResponseURLOutputType,
  SeriesSummaryOutputType,
  StoriesOutputType,
  ThumbnailOutputType,
} from 'src/shared';

@ObjectType()
export class EventSummaryOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class ComicDateOutputType {
  @Field(() => String)
  type: string;

  @Field(() => String)
  date: string;
}

@ObjectType()
export class ComicPriceOutputType {
  @Field(() => String)
  type: string;

  @Field(() => Float)
  price: number;
}

@ObjectType()
export class ImageOutputType {
  @Field(() => String)
  path: string;

  @Field(() => String)
  extension: string;
}

@ObjectType()
export class ComicOutputType {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  digitalId: number;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  issueNumber: number;

  @Field(() => String)
  variantDescription: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String)
  modified: string;

  @Field(() => String)
  isbn: string;

  @Field(() => String)
  upc: string;

  @Field(() => String)
  diamondCode: string;

  @Field(() => String)
  ean: string;

  @Field(() => String)
  issn: string;

  @Field(() => String)
  format: string;

  @Field(() => Int)
  pageCount: number;

  @Field(() => [TextObjectOutputType])
  textObjects: TextObjectOutputType[];

  @Field(() => String)
  resourceURI: string;

  @Field(() => [ResponseURLOutputType])
  urls: ResponseURLOutputType[];

  @Field(() => SeriesSummaryOutputType)
  series: SeriesSummaryOutputType;

  @Field(() => [ComicSummaryOutputType])
  variants: ComicSummaryOutputType[];

  @Field(() => [ComicSummaryOutputType])
  collections: ComicSummaryOutputType[];

  @Field(() => [ComicSummaryOutputType])
  collectedIssues: ComicSummaryOutputType[];

  @Field(() => [ComicDateOutputType])
  dates: ComicDateOutputType[];

  @Field(() => [ComicPriceOutputType])
  prices: ComicPriceOutputType[];

  @Field(() => ThumbnailOutputType)
  thumbnail: ThumbnailOutputType;

  @Field(() => [ImageOutputType])
  images: ImageOutputType[];

  @Field(() => CreatorsOutputType)
  creators: CreatorsOutputType;

  @Field(() => CharactersListOutputType)
  characters: CharactersListOutputType;

  @Field(() => StoriesOutputType)
  stories: StoriesOutputType;

  @Field(() => [EventsOutputType])
  events: EventsOutputType[];
}
