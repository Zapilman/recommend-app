import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryItem {
  @Field(() => String)
  name: string;

  @Field(() => String, { description: 'category of item' })
  category: string;
}
