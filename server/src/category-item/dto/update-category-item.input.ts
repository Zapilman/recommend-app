import { CreateCategoryItemInput } from './create-category-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryItemInput extends PartialType(CreateCategoryItemInput) {
  @Field(() => Int)
  id: number;
}
