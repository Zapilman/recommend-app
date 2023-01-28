import { Injectable } from '@nestjs/common';
import { CreateCategoryItemInput } from './dto/create-category-item.input';
import { UpdateCategoryItemInput } from './dto/update-category-item.input';

@Injectable()
export class CategoryItemService {
  create(createCategoryItemInput: CreateCategoryItemInput) {
    return 'This action adds a new categoryItem';
  }

  findAll() {
    return `This action returns all categoryItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryItem`;
  }

  update(id: number, updateCategoryItemInput: UpdateCategoryItemInput) {
    return `This action updates a #${id} categoryItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryItem`;
  }
}
