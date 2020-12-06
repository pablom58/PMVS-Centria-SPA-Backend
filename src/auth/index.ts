import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

import { JWT_SECRET_KEY , HASH_SECRET_KEY } from '../config'

import {
    EncryptPasswordInterface,
    ValidatePasswordInterface,
    GenerateTokenInterface,
    GenerateHashInterface,
    ValidateAuthenticationTokenInterface
} from './types/interfaces'

import { AuthData } from './types/types'
import { token } from 'morgan'

export const encryptPassword : EncryptPasswordInterface = async (password : string) => {
    let salt = await bcrypt.genSalt(12)
    return bcrypt.hash(password,salt)
}

export const validatePassword : ValidatePasswordInterface = (password : string , dbPassword : string) => bcrypt.compare(password,dbPassword)

export const generateToken : GenerateTokenInterface = (data : AuthData) => jwt.sign(
    data,
    JWT_SECRET_KEY,
    {
        expiresIn: 60 * 60 * 24
    }
)

export const validateAuthenticationToken : ValidateAuthenticationTokenInterface = (token : string) => jwt.verify(token , JWT_SECRET_KEY)

export const generateHash : GenerateHashInterface = ( data : string ) => crypto.createHmac('sha256',HASH_SECRET_KEY)
                                                        .update(data)
                                                        .digest('hex')