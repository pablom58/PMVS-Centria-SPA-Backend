import { ChargeData } from './types'
import { DocumentType } from '@typegoose/typegoose'
import { Payment } from '../store'

export interface MakeChargeInterface {
    (chargeData : ChargeData, user_id : string, method : string) : Promise<DocumentType<Payment>>
}

export interface GetUserPaymentesInterface {
    (user_id : string) : Promise<DocumentType<Payment>[]>
}