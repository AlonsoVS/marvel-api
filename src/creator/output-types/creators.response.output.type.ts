import { ObjectType } from '@nestjs/graphql';
import { CreatorsResponseDataOutputType } from './creators.response.data.output.type';
import { BaseResponseOutputType } from 'src/shared';

@ObjectType()
export class CreatorsResponseOutputType extends BaseResponseOutputType(
  CreatorsResponseDataOutputType,
) {}
