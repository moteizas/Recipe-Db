import { Controller, Get } from '@nestjs/common';
import { IngredientService } from 'src/services/ingredient.service';

@Controller('ingredients')
export class IngredientController {
  constructor(
    private ingredientService: IngredientService
  ) {}
  @Get()
  public getIngredient(): string {
    return 'hola';
  }
}
