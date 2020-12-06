import { InputType , Field } from 'type-graphql'

@InputType()
export class AuthInput {
    @Field() username ! : string
    @Field() password ! : string
}