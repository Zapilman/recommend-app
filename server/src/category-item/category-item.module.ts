import { forwardRef, Module } from '@nestjs/common';
import { CategoryItemService } from './category-item.service';
import { CategoryItemResolver } from './category-item.resolver';
import { CategoryModule } from 'src/category/category.module';

@Module({
  providers: [CategoryItemResolver, CategoryItemService],
  imports: [forwardRef(() => CategoryModule)],
})
export class CategoryItemModule {}
