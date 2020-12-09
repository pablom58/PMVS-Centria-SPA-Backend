import { ProductModel } from './store'

import {
    GetProductsInterface,
    CreateProductInterface,
    GetProductByIdInterface,
    UpdateProductInterface,
    DeleteProductInterface
} from './types/interfaces'

import { ProductInput , UpdateProductInput } from './types/inputs'

import { UpdateProduct } from './types/types'

export const getProducts : GetProductsInterface = async () => {
    const products = await ProductModel.find()
    return products
}

export const getProductById : GetProductByIdInterface = async ( _id : string ) => {
    const product = await ProductModel.findById(_id)

    if(!product)
        throw new Error('Product not found')

    return product
}

export const createProduct : CreateProductInterface = async ( user_id : string , data : ProductInput ) => {
    const { name , price , amount , description , imageUrl } = data

    if(!user_id || !name || !price || !amount || !description || !imageUrl)
        throw new Error('Not enough data')

    const product = await ProductModel.create({
        user_id,
        name,
        price,
        amount,
        description,
        imageUrl
    })

    if(!product)
        throw new Error('Something Wrong')

    return product
}

export const updateProduct : UpdateProductInterface = async ( _id : string , data : UpdateProductInput ) => {
    if(!_id)
        throw new Error('Internal Error')



    await ProductModel.updateOne({ _id },{ $Set: data })

    const product = await ProductModel.findById(_id)

    if(!product)
        throw new Error('Internal Error')

    return product
}

export const deleteProduct = async ( _id : string ) => {
    if(!_id)
        throw new Error('Internal Error')

    await ProductModel.deleteOne({ _id })

    return true
}
