import { InputType , Field } from 'type-graphql'

import { Payment } from '../store' 

@InputType()
export class PaymentInput implements Partial<Payment> {
    @Field()
    method ! : string

    @Field()
    amount ! : number
}