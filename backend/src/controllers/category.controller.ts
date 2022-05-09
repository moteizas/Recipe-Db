import { Controller, Get } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(
    private categoryService: CategoryService
  ) {}
  @Get()
  public getCategory(): string {
    return 'hola';
  }
}
