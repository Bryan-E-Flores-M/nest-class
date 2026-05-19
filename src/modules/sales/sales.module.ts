import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';
import { Sale } from './entities/sales.entity';
import { Vehicle } from '../vehicles/entities/vehicle.entity';
import { Customer } from '../customers/entities/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, Vehicle, Customer])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}