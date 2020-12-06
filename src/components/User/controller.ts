import { User , UserModel } from './store'
import { UserInput } from './types/inputs'
import { DocumentType } from '@typegoose/typegoose'

import { 
    RegisterUserInterface,
    FindUserByStringPropertyInterface 
} from './types/interfaces'

import { encryptPassword , generateHash } from '../../auth'
 
export const registerUser : RegisterUserInterface = async ( data : UserInput ) => {
    const { username , fullName , password , email } = data

    if(!username || !fullName || !password || !email)
        console.error('Not enough data')

    const user = await UserModel.create({
        username,
        fullName,
        password,
        email
    })

    user.password = await encryptPassword(password)
    user.userHash = await generateHash(`${username}${fullName}${user._id}`)

    await user.save()

    return user
}

export const findUserById : FindUserByStringPropertyInterface = async ( _id : string ) => {
    const user = await UserModel.findById(_id)

    if(!user)
        throw new Error('User not found')

    return user
}

export const findUserByEmail : FindUserByStringPropertyInterface = async ( username : string ) => {
    const user = await UserModel.findOne({ username })
    
    if(!user)
        throw new Error('User not found')

    return user
}