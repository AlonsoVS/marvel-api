import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map, throwError } from 'rxjs';
import { ExternalServices } from './external.services.enum';
import { buildExternalServiceUrl, constants } from './constants';
import { crypto } from './utils';

@Injectable()
export class DataService {
  private hash = crypto.generateHash(
    constants.TS + constants.PRIVATE_API_KEY + constants.PUBLIC_API_KEY,
  );

  constructor(private httpService: HttpService) {}

  getAll<T>(externalService: ExternalServices) {
    const url = buildExternalServiceUrl(
      externalService,
      constants.TS,
      this.hash,
      constants.PUBLIC_API_KEY,
    );

    return this.httpService.get<T>(url).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.log('Error: ', error.data);
        return throwError(() => error);
      }),
    );
  }
}
