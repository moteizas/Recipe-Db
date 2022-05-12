import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Recipe } from './recipe.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop({default:new Date()})
  createdAt?: number;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] })
  recipes: Recipe[];

  }

export const CategorySchema = SchemaFactory.createForClass(Category);