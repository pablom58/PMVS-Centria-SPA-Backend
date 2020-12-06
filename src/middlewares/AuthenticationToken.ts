import { MiddlewareFn } from 'type-graphql'

import { Context } from './types/interfaces'

import { validateAuthenticationToken } from '../auth'

export const AuthenticationToken : MiddlewareFn<Context> = ({ context } , next) => {
    const authorization : string | undefined = context.req.headers['authorization']

    if(!authorization)
        throw new Error('Not authenticated')

    try{
        const token : string = authorization.split(' ')[1]
        const payload = validateAuthenticationToken(token)
        context.payload = payload as any
    }catch(error) {
        throw new Error('Not authenticated')
    }

    return next()
}