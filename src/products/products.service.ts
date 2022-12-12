import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from './product.model'
import { ProductsModule } from "./products.module";

@Injectable()
export class ProductService {
    private products: Product[] = [];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new this.productModel({ title, desc, price });
        await newProduct.save();
        const result = this.products.push(newProduct)
        return "prodId"
    }

    fetchProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string) {
        const product = this.products.find((prod) => prod.id === productId);
        if (!product) {
            throw new NotFoundException('Could not find Product');
        }
        return { ...product }
    }

    updateProduct(productId: string, title: string, description: string, price: number) {
        const product = this.products.find((prod) => prod.id === productId);
        if (!product) {
            throw new NotFoundException('Could not find Product');
        }
        return { ...product }
    }


}