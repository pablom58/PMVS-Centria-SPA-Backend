import { Product } from '../store'
import { DocumentType } from '@typegoose/typegoose'

import { ProductInput } from './inputs'
import { UpdateProduct } from './types'

export interface GetProductsInterface {
    () : Promise<DocumentType<Product>[]>
}

export interface GetProductByIdInterface {
    ( _id : string ) : Promise<DocumentType<Product>>
}

export interface CreateProductInterface {
    ( user_id : string , data : ProductInput ) : Promise<DocumentType<Product>>
}

export interface UpdateProductInterface {
    (_id : string , data : UpdateProduct) : Promise<DocumentType<Product>>
}

export interface DeleteProductInterface {
    ( _id : string ) : Promise<Boolean>
}