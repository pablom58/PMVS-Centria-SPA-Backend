import { Resolver , Query , Mutation , Arg , UseMiddleware , Ctx } from 'type-graphql'
import { DocumentType } from '@typegoose/typegoose'
import { Product } from './store'

import { ProductInput , UpdateProductInput } from './types/inputs'

import { Context } from '../../middlewares/types/interfaces'
import { AuthenticationToken } from '../../middlewares/AuthenticationToken'

import * as ProductController from './controller'
import { UpdateProduct } from './types/types'

@Resolver(of => Product)
export class ProductResolver {
    @Query(() => [Product])
    async getProducts(){
        const products : DocumentType<Product>[] = await ProductController.getProducts()

        return products
    }

    @Query(() => Product)
    async getProduct(@Arg('_id') _id : string) : Promise<Product>{
        const product : DocumentType<Product> = await ProductController.getProductById(_id)
        return product
    }

    @Mutation(() => Product)
    @UseMiddleware(AuthenticationToken)
    async createProduct(
        @Arg('data') data : ProductInput,
        @Ctx() { payload } : Context
    ) : Promise<Product> {
        const product : DocumentType<Product> = await ProductController.createProduct(payload!.userId,data)

        return product
    }

    @Mutation(() => Product)
    @UseMiddleware(AuthenticationToken)
    async updateProduct(
        @Arg('_id') _id : string,
        @Arg('data') data : UpdateProductInput
    ) : Promise<Product> {
        console.log(data)
        const product : DocumentType<Product> = await ProductController.updateProduct(_id,data)
        return product
    }

    @Mutation(() => Boolean)
    @UseMiddleware(AuthenticationToken)
    async deleteProduct(@Arg('_id') _id : string) : Promise<Boolean> {
        const response : Boolean = await ProductController.deleteProduct(_id)
        return response
    }
}