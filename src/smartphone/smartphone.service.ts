import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSmartphoneDto } from './dto/create-smartphone.dto';
import { UpdateSmartphoneDto } from './dto/update-smartphone.dto';
import { Smartphone } from './entities/smartphone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SmartphoneService {
  constructor(
    @Inject('SMARTPHONE_REPOSITORY')
    private readonly smartphoneRepository: Repository<Smartphone>,
  ) {}

  async create(createSmartphoneDto: CreateSmartphoneDto): Promise<Smartphone> {
    const smartphoneExist = this.smartphoneRepository.findOneBy({
      model: createSmartphoneDto.model,
    });
    if (!smartphoneExist)
      throw new NotFoundException([
        'this smartphone name is already registered',
      ]);
    const newSmartphone = this.smartphoneRepository.create(createSmartphoneDto);
    return this.smartphoneRepository.save(newSmartphone);
  }

  // async findAll() {
  //   return await this.smartphoneRepository.find();
  // }
  async findAll() {
    return await this.smartphoneRepository.createQueryBuilder('smartphone')
        .orderBy('smartphone.idSmartphone', 'ASC')
        .getMany();
  }

  async findOne(id: number) {
    const smartphone = await this.smartphoneRepository.findOneBy({
      idSmartphone: id,
    });
    if (!smartphone) throw new NotFoundException(['smartphone does not exist']);
    return smartphone;
  }

  async update(id: number, updateSmartphoneDto: UpdateSmartphoneDto) {
    const smartphone = await this.findOne(id);
    const updateSmartphone = Object.assign(smartphone, updateSmartphoneDto);
    return await this.smartphoneRepository.save(updateSmartphone);
  }

  async remove(id: number) {
    const smartphone = await this.findOne(id);
    return await this.smartphoneRepository.remove(smartphone);
  }
}
