import { Resolver , Query , Mutation , Arg , UseMiddleware , Ctx }  from 'type-graphql'
import { DocumentType } from '@typegoose/typegoose'
import { Payment } from './store'

import { PaymentInput } from './types/inputs'

import { Context } from '../../middlewares/types/interfaces'
import { AuthenticationToken } from '../../middlewares/AuthenticationToken'

import { StripeService } from '../../utils/stripe'

import {
    makeCharge,
    getUserPayments
} from './controller'

import { ChargeData } from './types/types'

@Resolver(of => Payment)
export class PaymentResolver {
    @Query(() => String)
    async getTestCardStripeToken() : Promise<any>{
        const stripe = new StripeService()
        const token = await stripe.secureAction(StripeService.actions.GENERATE_TEST_CARD_TOKEN)
        
        if(token.error)
            throw new Error(token.error)
            
        return token.id
    }

    @Query(() => [Payment])
    @UseMiddleware(AuthenticationToken)
    async getUserPayments(@Ctx() { payload } : Context ): Promise<Payment[]>{
        let payments = await getUserPayments(payload!.userId)

        return payments
    }

    @Mutation(() => Payment)
    @UseMiddleware(AuthenticationToken)
    async makeCharge(
        @Arg('data') data : PaymentInput,
        @Arg('cardToken') cardToken: string,
        @Ctx() { payload } : Context
    ) : Promise<Payment>{
        let chargeData : ChargeData = {
            amount: data.amount * 100,
            currency: 'usd',
            source: cardToken,
            description: 'Payment by stripe from pmvs centria project'
        }        

        let payment = await makeCharge(chargeData,payload!.userId,data.method)
            
        return payment
    }    
}