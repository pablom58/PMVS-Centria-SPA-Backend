import { Resolver , Query , Mutation , Arg } from 'type-graphql'
import { User , UserModel } from './store' 
import { UserInput } from './types/inputs'

@Resolver(of => User)
export class UserResolver {

    @Query(() => User)
    async findUserById(@Arg('id') _id : string){
        const user = await UserModel.findById(_id)
        return user
    }

    @Mutation(() => User)
    async createUser(@Arg('data'){
        username,
        fullName,
        password,
        email
    } : UserInput) : Promise<User> {
        const user = await UserModel.create({
            username,
            fullName,
            password,
            email
        })
        
        await user.save()
        return user
    }
}