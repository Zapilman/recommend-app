import { forwardRef, Module } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { CategoryItemResolver } from './category-item.resolver';
import { CategoryModule } from 'src/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CategoryItem,
  CategoryItemSchema,
} from './entities/category-item.entity.schema';

@Module({
  providers: [CategoryItemResolver, CategoryItemService],
  exports: [CategoryItemService],
  imports: [
    MongooseModule.forFeature([
      { name: CategoryItem.name, schema: CategoryItemSchema },
    ]),
    forwardRef(() => CategoryModule),
  ],
})
export class CategoryItemModule {}
