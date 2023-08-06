export type BaseHttpResponse<T> = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: BaseHttpResponseData<T>;
};

export type BaseHttpResponseData<T> = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
};
