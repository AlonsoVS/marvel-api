export type ComicHttpResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicHttpResponseData;
};

export type ComicHttpResponseData = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicHttpDto[];
};

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
  series: Series;
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

export type ComicSummary = {
  resourceURI: string;
  name: string;
}

export type ComicImage = {
  path: string;
  extension: string;
};

export type TextObject = {
  type: string;
  language: string;
  text: string;
};

export type ResponseURL = {
  type: string;
  url: string;
};

export type Events = {
  available: number;
  collectionURI: string;
  items: EventSummary[];
  returned: number;
};

export type EventSummary = {
  resourceURI: string;
  name: string;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
};

export type StoriesItem = {
  resourceURI: string;
  name: string;
  type: string;
};

export type Characters = {
  available: number;
  collectionURI: string;
  items: CharacterSummary[];
  returned: number;
};

export type CharacterSummary = {
  resourceURI: string;
  name: string;
  role: string;
};

export type Series = {
  resourceURI: string;
  name: string;
};

export type ComicDate = {
  type: string;
  date: string;
};

export type ComicPrice = {
  type: string;
  price: number;
};

export type Thumbnail = {
  path: string;
  extension: string;
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
