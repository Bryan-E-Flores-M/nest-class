import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from '../dto/vehicles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto) {
    console.log('Datos listos para guardar:', createVehicleDto);

    const newVehicle = this.vehicleRepository.create(createVehicleDto);

    await this.vehicleRepository.save(newVehicle);

    return newVehicle;
  }

  findAll() {
    return 'Lista de vehiculos';
  }
}
