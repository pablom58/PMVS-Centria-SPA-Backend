import { AuthData } from './types'

export interface EncryptPasswordInterface {
    ( password : string ) : Promise<String>
}

export interface ValidatePasswordInterface {
    ( password : string , dbPassword : string ) : Promise<boolean>
}

export interface GenerateTokenInterface {
    ( data : AuthData ) : string
}

export interface GenerateHashInterface {
    ( data : string ) : string
}