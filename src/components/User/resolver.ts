import { Resolver , Query , Mutation , Arg , UseMiddleware , Ctx } from 'type-graphql'
import { User } from './store'
import { UserInput } from './types/inputs'

import { Context } from '../../middlewares/types/interfaces'
import { AuthenticationToken } from '../../middlewares/AuthenticationToken'

import * as UserController from './controller'

@Resolver(of => User)
export class UserResolver {

    @Query(() => User)
    @UseMiddleware(AuthenticationToken)
    async findAuthenticatedUser(@Ctx(){ payload } : Context){
        const user = await UserController.findUserById(payload!.userId)
        return user
    }

    @Mutation(() => User)
    async createUser(@Arg('data') data : UserInput) : Promise<User> {
        const user = UserController.registerUser(data)
        return user
    }
}