import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryItem {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
