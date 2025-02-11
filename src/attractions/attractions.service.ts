import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Attraction } from './entities/attraction.entity';

@Injectable()
export class AttractionsService {
  constructor(
    @InjectRepository(Attraction)
    private attractionsRepository: Repository<Attraction>,
  ) {}

  async create(createAttractionDto: CreateAttractionDto) {
    const attraction =
      await this.attractionsRepository.save(createAttractionDto);

    if (!attraction) {
      throw new InternalServerErrorException('Create a attraction failed.');
    }
    return { data: attraction, message: 'Create a attraction success.' };
  }

  async findAll() {
    const attraction = await this.attractionsRepository.find();

    if (attraction.length === 0) {
      return { message: 'Not found a attractions data' };
    }
    return attraction;
  }

  async findOne(id: number) {
    const attraction = await this.attractionsRepository.findOneBy({ id });

    if (!attraction) {
      throw new NotFoundException(`Not found a ${id} attraction`);
    }
    return attraction;
  }

  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    const attraction = await this.attractionsRepository.update(
      id,
      updateAttractionDto,
    );

    if (!attraction) {
      throw new NotFoundException(`Not found attraction id ${id}`);
    }
    return { message: `Update a ${id} attraction success.` };
  }

  async remove(id: number) {
    const attraction = await this.attractionsRepository.delete(id);

    if (!attraction.affected) {
      throw new NotFoundException(`Not found attraction id ${id}`);
    }
    return { message: `Delete a ${id} attraction` };
  }
}
