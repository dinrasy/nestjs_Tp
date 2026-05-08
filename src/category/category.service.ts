import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categories = [{ id: 1, name: 'Electronics' }];

  create(createCategoryDto: any) {
    const newCat = { id: this.categories.length + 1, name: createCategoryDto.name };
    this.categories.push(newCat);
    return newCat;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    return this.categories.find(cat => cat.id === id);
  }

  // 👇 បន្ថែមមុខងារ Update
  update(id: number, updateCategoryDto: any) {
    const index = this.categories.findIndex(cat => cat.id === id);
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...updateCategoryDto };
      return this.categories[index];
    }
    return null;
  }

  // 👇 បន្ថែមមុខងារ Remove
  remove(id: number) {
    const index = this.categories.findIndex(cat => cat.id === id);
    if (index !== -1) {
      return this.categories.splice(index, 1)[0];
    }
    return null;
  }
}