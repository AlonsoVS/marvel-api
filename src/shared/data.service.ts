import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';
import { ExternalServices } from './external.services.enum';
let crypto = require('crypto');

@Injectable()
export class DataService {
  private ts = 1;
  private publicApiKey = '88c3ff6d87f879834564ed04c53705ee';
  private privateApiKey = '5ceadda8d4b147128abbc0f466e4579777a8321b';
  private hash = this.md5(this.ts + this.privateApiKey + this.publicApiKey);

  constructor(private httpService: HttpService) {}

  getAll<T>(externalService: ExternalServices) {
    const url = `https://gateway.marvel.com:443/v1/public/${externalService}?ts=${this.ts}&apikey=${this.publicApiKey}&hash=${this.hash}`;

    return this.httpService.get<T>(url).pipe(
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
