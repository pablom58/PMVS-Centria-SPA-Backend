import { InputType , Field } from 'type-graphql'
import { Length } from 'class-validator'
import { User } from '../store'

@InputType()
export class UserInput implements Partial<User>{
    @Field()
    @Length(5,50)
    username ! : string 

    @Field()
    @Length(10,100)
    fullName ! : string

    @Field()
    @Length(5,20)
    password ! : string

    @Field()
    @Length(10,100)
    email ! : string
}