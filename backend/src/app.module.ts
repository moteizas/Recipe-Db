import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientController } from './controllers/ingredient.controller';
import { IngredientService } from './services/ingredient.service';
import { CategoryService } from './services/category.service';
import { RecipeService } from './services/recipe.service';
import { CategoryController } from './controllers/category.controller';
import { RecipeController } from './controllers/recipe.controller';
import { Ingredient, IngredientSchema } from './models/ingredient.schema';
import { Category, CategorySchema } from './models/category.schema';
import { Recipe, RecipeSchema } from './models/recipe.schema';

@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
      { name: Ingredient.name, schema: IngredientSchema },
      { name: Recipe.name, schema: RecipeSchema }
    ])
  ],
  controllers: [IngredientController, CategoryController, RecipeController],
  providers: [IngredientService, CategoryService, RecipeService],
})
export class AppModule {}
