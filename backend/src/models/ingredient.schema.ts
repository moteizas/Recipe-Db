import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Recipe } from './recipe.schema';

export type IngredientDocument = Ingredient & Document;

@Schema()
export class Ingredient {
  @Prop()
  name: string;

  @Prop()
  createdAt: number;

  @Prop()
  category: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] })
  recipes: Recipe[];

}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);