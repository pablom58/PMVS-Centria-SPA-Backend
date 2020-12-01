import { error as errorResponse } from './response'

import { Response , Request } from 'express'

type CustomError = {
    statusCode : number , 
    message : string
}

interface ErrorInterface {
    (
        errorCode : number, 
        errorMessage : string
    ) : CustomError
}

interface ErrorMiddleware {
    (
        req : Request,
        res : Response,
    ) : void
}

export const error : ErrorInterface = (errorCode : number , errorMessage : string) => {
    const message : string = errorMessage || 'Internal Error'
    const statusCode : number = errorCode || 500

    return {
        message,
        statusCode
    }
}

export const errors : ErrorMiddleware = (req : Request, res : Response) => errorResponse(res)