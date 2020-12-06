import { AuthInput } from './inputs'

export interface AuthLoginInterface {
    ( data : AuthInput ) : Promise<string>
}