/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAttractionDto } from './create-attraction.dto';

export class UpdateAttractionDto extends PartialType(CreateAttractionDto) {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly detail?: string;

  @IsOptional()
  @IsString()
  readonly coverimage?: string;

  @IsOptional()
  @IsNumber()
  readonly latitude?: number;

  @IsOptional()
  @IsNumber()
  readonly longitude?: number;
}
