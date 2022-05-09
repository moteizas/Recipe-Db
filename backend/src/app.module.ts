import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientController } from './controllers/ingredient.controller';
import { IngredientService } from './services/ingredient.service';
import { CategoryService } from './services/category.service';
import { RecipeService } from './services/recipe.service';
import { CategoryController } from './controllers/category.controller';
import { RecipeController } from './controllers/recipe.controller';

@Module({
  //imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [IngredientController, CategoryController, RecipeController],
  providers: [IngredientService, CategoryService, RecipeService],
})
export class AppModule {}
