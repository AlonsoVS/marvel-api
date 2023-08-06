import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, tap, throwError } from 'rxjs';
import { ComicHttpResponse } from '../http-response';

let crypto = require('crypto');

@Injectable()
export class ComicService {
  constructor(private httpService: HttpService) {}

  getAll() {
    const ts = 1;
    const publicApiKey = '88c3ff6d87f879834564ed04c53705ee';
    const privateApiKey = '5ceadda8d4b147128abbc0f466e4579777a8321b';
    const hash = this.md5(ts + privateApiKey + publicApiKey);

    const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publicApiKey}&hash=${hash}`;

    return this.httpService.get<ComicHttpResponse>(url).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.log('Error: ', error.data);
        return throwError(() => error);
      }),
    );
  }

  private md5(string: string) {
    return crypto.createHash('md5').update(string).digest('hex');
  }
}
