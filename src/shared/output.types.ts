import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseResponseDataOutputType {
  @Field(() => Int, { nullable: true })
  offset: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  count: number;
}

export function BaseResponseOutputType<T>(ItemType: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class DataClass {
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

    @Field(() => ItemType)
    data: T;
  }

  return DataClass;
}

@ObjectType()
export class SeriesSummaryOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class SeriesOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [SeriesSummaryOutputType])
  items: SeriesSummaryOutputType[];

  @Field(() => Int)
  returned: number;
}

@ObjectType()
export class StoriesItemOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;
}

@ObjectType()
export class StoriesOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [StoriesItemOutputType])
  items: StoriesItemOutputType[];

  @Field(() => Int)
  returned: number;
}

@ObjectType()
export class ThumbnailOutputType {
  @Field(() => String)
  path: string;

  @Field(() => String)
  extension: string;
}

@ObjectType()
export class ResponseURLOutputType {
  @Field(() => String)
  type: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class EventSummaryOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class EventsOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [EventSummaryOutputType])
  items: EventSummaryOutputType[];

  @Field(() => Int)
  returned: number;
}

@ObjectType()
export class ComicListOutputType {
  @Field(() => Int)
  available: number;

  @Field(() => Int)
  returned: number;

  @Field(() => String)
  collectionURI: string;

  @Field(() => [ComicSummaryOutputType])
  items: ComicSummaryOutputType[];
}

@ObjectType()
export class ComicSummaryOutputType {
  @Field(() => String)
  resourceURI: string;

  @Field(() => String)
  name: string;
}
