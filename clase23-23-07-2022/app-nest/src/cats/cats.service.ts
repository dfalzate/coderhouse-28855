import { Injectable } from '@nestjs/common';
import { Cats } from '../interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cats[] = [
    {
      name: 'Cat1',
      age: 1,
      breed: 'Breed1',
    },
  ];

  createCat(cat: Cats) {
    this.cats.push(cat);
    return cat;
  }

  getCats() {
    return this.cats;
  }
}
