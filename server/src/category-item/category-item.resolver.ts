import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryItemService } from './category-item.service';
import { CategoryItem } from './entities/category-item.entity';
import { CreateCategoryItemInput } from './dto/create-category-item.input';
import { UpdateCategoryItemInput } from './dto/update-category-item.input';

@Resolver(() => CategoryItem)
export class CategoryItemResolver {
  constructor(private readonly categoryItemService: CategoryItemService) {}

  @Mutation(() => CategoryItem)
  createCategoryItem(
    @Args('createCategoryItemInput')
    createCategoryItemInput: CreateCategoryItemInput,
  ) {
    return this.categoryItemService.create(createCategoryItemInput);
  }

  @Query(() => [CategoryItem], { name: 'categoryItem' })
  findAll() {
    return this.categoryItemService.findAll();
  }

  @Query(() => CategoryItem, { name: 'categoryItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoryItemService.findOne(id);
  }

  @Mutation(() => CategoryItem)
  updateCategoryItem(
    @Args('updateCategoryItemInput')
    updateCategoryItemInput: UpdateCategoryItemInput,
  ) {
    return this.categoryItemService.update(
      updateCategoryItemInput.id,
      updateCategoryItemInput,
    );
  }

  @Mutation(() => CategoryItem)
  removeCategoryItem(@Args('id', { type: () => Int }) id: number) {
    return this.categoryItemService.remove(id);
  }
}
