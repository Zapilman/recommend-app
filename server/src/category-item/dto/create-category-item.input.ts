import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryItemInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { description: 'category of item' })
  category: string;
}
