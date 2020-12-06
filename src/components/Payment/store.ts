import { ObjectType , Field , ID } from 'type-graphql'
import { prop as Property , getModelForClass } from '@typegoose/typegoose'

import { ObjectId } from 'mongodb'

import { User } from '../User/store'

@ObjectType()
export class Payment {
    @Field(() => ID , { nullable: true })
    _id ? : string

    @Field(_type => String)
    @Property({ ref: User })
    user_id ! : ObjectId | any

    @Field()
    @Property()
    method ! : string

    @Field()
    @Property()
    code ! : string

    @Field()
    @Property()
    date ! : string

    @Field()
    @Property()
    amount ! : number
}

export const PaymentModel = getModelForClass(Payment)