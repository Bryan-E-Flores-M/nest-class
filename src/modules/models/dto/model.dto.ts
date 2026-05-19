import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateVehicleModelDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  brand_id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({ example: 'Corrolla' })
  name: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  @ApiProperty({ example: 'Sedan' })
  type?: string;
}
export class UpdateVehicleModelDto extends PartialType(CreateVehicleModelDto) {}