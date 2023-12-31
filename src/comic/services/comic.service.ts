import { Injectable } from '@nestjs/common';
import { ComicHttpResponse } from '../http-response';
import { DataService, ExternalServices } from 'src/shared';

@Injectable()
export class ComicService {
  private constants = {
    externalService: ExternalServices.COMICS,
  };

  constructor(private dataService: DataService) {}
  getAll() {
    return this.dataService.getAll<ComicHttpResponse>(
      this.constants.externalService,
    );
  }
}
