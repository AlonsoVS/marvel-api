import { ObjectType } from '@nestjs/graphql';
import { CharactersResponseDataOutputType } from './characters.response.data.output.type';
import { BaseResponseOutputType } from 'src/shared';

@ObjectType()
export class CharactersResponseOutputType extends BaseResponseOutputType(
  CharactersResponseDataOutputType,
) {}
