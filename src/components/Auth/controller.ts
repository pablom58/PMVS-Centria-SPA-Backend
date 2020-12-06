import { AuthInput } from './types/inputs'

import { validatePassword , generateToken } from '../../auth'
import { findUserByEmail } from '../User/controller'

import { AuthLoginInterface } from './types/interfaces'

export const authLogin : AuthLoginInterface = async ( data : AuthInput ) => {
    const user = await findUserByEmail(data.username)

    if(!user)
        throw new Error('User not found')

    const verify = await validatePassword(data.password , user.password)

    if(!verify)
        throw new Error('Invalid Data')

    const token : string = generateToken({
        userId : user._id
    })

    return token
}