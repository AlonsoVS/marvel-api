import {
  BaseHttpResponse,
  BaseHttpResponseData,
  ComicList,
  Events,
  ResponseURL,
  SeriesSummary,
  Stories,
  Thumbnail,
} from 'src/shared';

export type CreatorsHttpResponse = BaseHttpResponse<
  BaseHttpResponseData<CharacterHttpDto>
>;

export type CharacterHttpDto = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: string;
  resourceURI: string;
  urls: ResponseURL[];
  thumbnail: Thumbnail;
  stories: Stories;
  events: Events[];
  series: SeriesList;
  comics: ComicList;
};

export type SeriesList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
};
