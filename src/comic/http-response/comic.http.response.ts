import {
  BaseHttpResponse,
  ComicSummary,
  Events,
  ResponseURL,
  SeriesSummary,
  Stories,
  Thumbnail,
} from 'src/shared';

export type ComicHttpResponse = BaseHttpResponse<ComicHttpDto>;

export type ComicHttpDto = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: ResponseURL[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Thumbnail;
  images: ComicImage[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events[];
};

export type ComicImage = {
  path: string;
  extension: string;
};

export type TextObject = {
  type: string;
  language: string;
  text: string;
};

export type Characters = {
  available: number;
  collectionURI: string;
  items: CharacterSummary[];
  returned: number;
};

export type CharacterSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type ComicDate = {
  type: string;
  date: string;
};

export type ComicPrice = {
  type: string;
  price: number;
};

export type Creators = {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
};

export type CreatorsItem = {
  resourceURI: string;
  name: string;
  role: string;
};
