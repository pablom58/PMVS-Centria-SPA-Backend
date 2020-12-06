import { ObjectType , Field , ID } from 'type-graphql'
import { prop as Property , getModelForClass } from '@typegoose/typegoose'

import { ObjectId } from 'mongodb'

import { User } from '../User/store'

@ObjectType()
export class Product {
    @Field(() => ID, { nullable: true })
    _id ? : string

    @Field(_type => String)
    @Property({ ref: User })
    user_id ! : ObjectId | any

    @Field()
    @Property()
    name ! : string

    @Field()
    @Property()
    price ! : number

    @Field()
    @Property()
    amount ! : number

    @Field()
    @Property()
    description ! : string
} 

export const ProductModel = getModelForClass(Product)