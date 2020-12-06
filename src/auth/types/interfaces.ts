import { AuthData } from './types'

export interface EncryptPasswordInterface {
    ( password : string ) : Promise<string>
}

export interface ValidatePasswordInterface {
    ( password : string , dbPassword : string ) : Promise<boolean>
}

export interface GenerateTokenInterface {
    ( data : AuthData ) : string
}

export interface ValidateAuthenticationTokenInterface {
    ( token : string ) : string | AuthData
}

export interface GenerateHashInterface {
    ( data : string ) : string
}