/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString } from 'class-validator';

export class CreateAttractionDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly detail: string;

  @IsString()
  readonly coverimage: string;

  @IsNumber()
  readonly latitude: number;

  @IsNumber()
  readonly longitude: number;
}
