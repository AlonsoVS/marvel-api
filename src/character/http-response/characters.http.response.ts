import {
  BaseHttpResponse,
  BaseHttpResponseData,
  ComicSummary,
  Events,
  ResponseURL,
  SeriesSummary,
  Stories,
  Thumbnail,
} from 'src/shared';

export type CharactersHttpResponse = BaseHttpResponse<
  BaseHttpResponseData<CharacterHttpDto>
>;

export type CharacterHttpDto = {
  id: number;
  name: string;
  description: string | null;
  modified: string;
  resourceURI: string;
  urls: ResponseURL[];
  thumbnail: Thumbnail;
  stories: Stories;
  events: Events[];
  series: SeriesSummary;
  comics: ComicList;
};

export type ComicList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
};
