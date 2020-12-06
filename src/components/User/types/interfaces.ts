import { UserInput } from './inputs'
import { User } from '../store'
import { DocumentType } from '@typegoose/typegoose'

export interface RegisterUserInterface {
    ( data : UserInput ) : Promise<User>
}

export interface FindUserByStringPropertyInterface {
    ( data : string ) : Promise< DocumentType<User> | null > 
}