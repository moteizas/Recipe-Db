import { Controller, Get } from '@nestjs/common';
import { RecipeService } from 'src/services/recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(
    private recipeService: RecipeService
  ) {}
  @Get()
  public getRecipes(): string {
    return 'hola';
  }
}
