import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateVehicleDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id?: number;

  @IsNumber()
  @ApiProperty()
  model_id!: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  vin!: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty()
  year?: number;

  @IsString()
  @MinLength(3)
  @ApiProperty()
  color!: string;

  @IsNumber()
  @ApiProperty()
  mileage!: number;

  @IsNumber()
  @ApiProperty()
  price!: number;

  @IsString()
  @ApiProperty()
  status!: string;
}

export class UpdateVehicleDto extends PartialType(CreateVehicleDto) {}
