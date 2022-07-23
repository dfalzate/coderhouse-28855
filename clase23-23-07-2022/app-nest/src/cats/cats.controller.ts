import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from '../cats/cats.service';
import { createCatDTO } from '../dto/create-cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async getCats() {
    return await this.catsService.getCats();
  }

  @Post()
  async createCat(@Body() cat: createCatDTO) {
    const response = await this.catsService.createCat(cat);
    console.log(response);
    return response;
  }
}
