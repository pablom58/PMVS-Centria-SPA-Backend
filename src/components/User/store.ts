import { ObjectType , Field , ID } from 'type-graphql'
import { prop as Property , getModelForClass } from '@typegoose/typegoose'

@ObjectType()
export class User {    
    @Field(() => ID, { nullable: true })
    _id ? : string;

    @Field() 
    @Property()
    username ! : string

    @Field()
    @Property()
    fullName ! : string

    @Field()
    @Property()
    password ! : string

    @Field()
    @Property()
    email ! : string

    @Field()
    @Property()
    userHash ? : string
}

export const UserModel = getModelForClass(User)