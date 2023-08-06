import { Injectable } from '@nestjs/common';
import { DataService, ExternalServices } from 'src/shared';
import { CharactersHttpResponse } from '../http-response';

@Injectable()
export class CharacterService {
  private constants = {
    externalService: ExternalServices.CHARACTERS,
  };

  constructor(private dataService: DataService) {}
  getAll() {
    return this.dataService.getAll<CharactersHttpResponse>(
      this.constants.externalService,
    );
  }
}
