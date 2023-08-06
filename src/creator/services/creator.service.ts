import { Injectable } from '@nestjs/common';
import { DataService, ExternalServices } from 'src/shared';
import { CreatorsHttpResponse } from '../http-response';

@Injectable()
export class CreatorService {
  private constants = {
    externalService: ExternalServices.CREATORS,
  };

  constructor(private dataService: DataService) {}
  getAll() {
    return this.dataService.getAll<CreatorsHttpResponse>(
      this.constants.externalService,
    );
  }
}
