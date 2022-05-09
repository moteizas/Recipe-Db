import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from './category.schema';
import { Ingredient } from './ingredient.schema';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  createdAt: number;

  @Prop()
  instructions: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  categories: Category[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }] })
  ingredients: Ingredient[];

}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

