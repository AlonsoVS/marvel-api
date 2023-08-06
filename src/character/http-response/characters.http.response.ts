import {
  BaseHttpResponse,
  ComicSummary,
  Events,
  ResponseURL,
  SeriesList,
  Stories,
  Thumbnail,
} from 'src/shared';

export type CharactersHttpResponse = BaseHttpResponse<CharacterHttpDto>;

export type CharacterHttpDto = {
  id: number;
  name: string;
  description: string | null;
  modified: string;
  resourceURI: string;
  urls: ResponseURL[];
  thumbnail: Thumbnail;
  stories: Stories;
  events: Events;
  series: SeriesList;
  comics: ComicList;
};

export type ComicList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
};
