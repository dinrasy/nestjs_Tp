import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [{ id: 1, name: 'Laptop', price: 999.99, categoryId: 1 }];

  create(createProductDto: any) {
    const newProd = { 
      id: this.products.length + 1, 
      ...createProductDto 
    };
    this.products.push(newProd);
    return newProd;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(prod => prod.id === id);
  }

  
  update(id: number, updateProductDto: any) {
    const index = this.products.findIndex(prod => prod.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updateProductDto };
      return this.products[index];
    }
    return null;
  }

  
  remove(id: number) {
    const index = this.products.findIndex(prod => prod.id === id);
    if (index !== -1) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}