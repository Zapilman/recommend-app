import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryService } from 'src/category/category.service';
import { CreateCategoryItemInput } from './dto/create-category-item.input';
import { UpdateCategoryItemInput } from './dto/update-category-item.input';
import {
  CategoryItem,
  CategoryItemDocument,
} from './entities/category-item.entity.schema';

@Injectable()
export class CategoryItemService {
  constructor(
    @InjectModel(CategoryItem.name)
    private categoryItemModel: Model<CategoryItemDocument>,
    @Inject(forwardRef(() => CategoryService))
    private readonly categoryService: CategoryService,
  ) {}
  async create(createCategoryItemInput: CreateCategoryItemInput) {
    const category = await this.categoryService.findOne(
      createCategoryItemInput.category,
    );
    if (!category) {
      throw new HttpException('category not found', HttpStatus.NOT_FOUND);
    }
    const categoryItem = await new this.categoryItemModel(
      createCategoryItemInput,
      category,
    );
    return categoryItem.save();
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
