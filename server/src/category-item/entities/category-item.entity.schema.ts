import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from 'src/category/entities/category.schema';

export type CategoryItemDocument = CategoryItem & Document;

@Schema({ timestamps: true })
export class CategoryItem {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  })
  category: Category;
}

export const CategoryItemSchema = SchemaFactory.createForClass(CategoryItem);
