import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "src/models/category.schema";

@Injectable()
export class CategoryService implements OnModuleInit {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) {}
  public async onModuleInit() {
    const category = new this.categoryModel({
      name:'Italian',
      description:'de Talca'
    });
    await category.save();
    console.log('jjijijiji')
  }
}