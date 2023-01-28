import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category, CategoryDocument } from './entities/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private newsModel: Model<CategoryDocument>,
  ) {}
  async create(createCategoryInput: CreateCategoryInput) {
    const category = await new this.newsModel(createCategoryInput);
    return category.save();
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}