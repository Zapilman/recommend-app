import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryItemInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
