import { query } from 'express'
import { Resolver , Query , Mutation , Arg } from 'type-graphql'
import { AuthInput } from './types/inputs'

import * as AuthController from './controller'

@Resolver()
export class AuthResolver {
    @Query(() => String)
    async login(@Arg('data') data : AuthInput) : Promise<string>{
        const token = AuthController.authLogin(data)

        return token
    }
}