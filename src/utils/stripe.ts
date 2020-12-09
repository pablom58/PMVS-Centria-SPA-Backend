import { STRIPE_KEY } from '../config'

const stripe = require('stripe')(STRIPE_KEY)

export class StripeService {
    private stripe

    static actions = {
        GENERATE_TEST_CARD_TOKEN: 'GENERATE_TEST_CARD_TOKEN', 
        MAKE_CHARGE: 'MAKE_CHARGE', 
    }

    constructor(){
        this.stripe = stripe
    }

    public async secureAction(action : string , data ? : any){
        let response = null
        
        try{

            switch(action){
                case StripeService.actions.GENERATE_TEST_CARD_TOKEN:
                    response = await this.generateTestCardToken()
                    break
                case StripeService.actions.MAKE_CHARGE:
                    response = await this.charge(data)
                    break
            }

            return response
        }catch(error){
            switch (error.type) {
                case 'StripeCardError': return { error: 'Your card details are invalid.' }
                case 'StripeRateLimitError': return { error: 'Too many requests made to the API too quickly' }
                case 'StripeInvalidRequestError': return { error: 'Invalid parameters were supplied to Stripe API' }
                case 'StripeAPIError': return { error: 'An error occurred internally with Stripe API' }
                case 'StripeConnectionError': return { error: 'Some kind of error occurred during the HTTPS communication' }
                case 'StripeAuthenticationError': return { error: 'You probably used an incorrect API key' }
                default: return { error: 'Internal Error' }
              }
        }
    }

    private async generateTestCardToken(){
        const token = await this.stripe.tokens.create({
            card: {
                number: '4242424242424242',
                exp_month: 12,
                exp_year: 2026,
                cvc: '123'
            }
        })

        return token
    }

    private  async charge(data : any){
        const token = await this.stripe.charges.create({
            amount: data.amount,
            currency: data.currency,
            source: data.source,
            description: data.description,
        })

        return token
    }

    
}