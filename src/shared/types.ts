export type ComicSummary = {
  resourceURI: string;
  name: string;
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

export type SeriesList = {
  available: number;
  collectionURI: string;
  items: SeriesSummary[];
  returned: number;
};


export type SeriesSummary = {
  resourceURI: string;
  name: string;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type ComicList = {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
};
