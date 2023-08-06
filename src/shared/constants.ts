import { ExternalServices } from './external.services.enum';

export const constants = {
  TS: 1,
  PUBLIC_API_KEY: '88c3ff6d87f879834564ed04c53705ee',
  PRIVATE_API_KEY: '5ceadda8d4b147128abbc0f466e4579777a8321b',
  BASE_EXTERNAL_SERVICES_URL: `https://gateway.marvel.com:443/v1/public/{externalService}?ts={ts}&apikey={apiKey}&hash={hash}`,
};

export const buildExternalServiceUrl = (
  externalService: ExternalServices,
  ts: number,
  hash: string,
  apikey: string,
): string => {
  const mapObj = {
    externalService: externalService,
    ts: ts,
    hash: hash,
    apiKey: apikey,
  };

  const str = constants.BASE_EXTERNAL_SERVICES_URL.replace(
    /{externalService}|{ts}|{hash}|{apiKey}/gi,
    (matched) => mapObj[matched.replace(/[\])}[{(]/g, '')],
  );
  return str;
};
