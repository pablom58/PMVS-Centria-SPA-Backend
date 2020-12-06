import { InputType , Field } from 'type-graphql'
import { ObjectId } from 'mongodb'
import { Length } from 'class-validator'

import { Product } from '../store'

@InputType()
export class ProductInput implements Partial<Product> {
    @Field()
    @Length(5,50)
    name ! : string

    @Field()
    price ! : number

    @Field()
    amount ! : number

    @Field()
    @Length(10,250)
    description ! : string
} 

@InputType()
export class UpdateProductInput implements Partial<Product> {
    @Field()
    @Length(5,50)
    name ? : string

    @Field()
    price ? : number

    @Field()
    amount ? : number

    @Field()
    @Length(10,250)
    description ? : string
}

