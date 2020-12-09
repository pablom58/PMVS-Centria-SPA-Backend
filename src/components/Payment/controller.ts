import { PaymentModel , Payment } from './store'

import { StripeService } from '../../utils/stripe'

import { ChargeData } from './types/types'

import { DocumentType } from '@typegoose/typegoose'

import {
    MakeChargeInterface,
    GetUserPaymentesInterface
} from './types/interfaces'

export const makeCharge : MakeChargeInterface = async (chargeData : ChargeData,user_id : string,method : string) => {
    const stripe = new StripeService()

    const charge = await stripe.secureAction(StripeService.actions.MAKE_CHARGE , chargeData)

    if(charge.error)
        throw new Error(charge.error)

    let date : Date = new Date()

    const payment : DocumentType<Payment> = await PaymentModel.create({
        user_id,
        method,
        code: charge.id,
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
        amount: chargeData.amount / 100,
        url: charge.receipt_url
    })

    return payment
}

export const getUserPayments : GetUserPaymentesInterface = async (user_id : string) => {
    const payments = await PaymentModel.find({user_id})

    return payments
}