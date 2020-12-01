import { Response } from 'express'

interface ApiResponse {
    (
        res : Response, 
        statusCode? : number, 
        responseMessage? : string,
        data? : any, 
    ) : Response
}

export const success : ApiResponse = (res : Response,statusCode? : number,responseMessage? : string,data? : any) => {
    let status : number = statusCode || 200
    let message : string = responseMessage || 'Request Success'
    
    return res.status(status).json({
        status,
        message,
        data
    })
}

export const error : ApiResponse = (res : Response, statusCode? : number, responseMessage? : string) => {
    let status : number = statusCode || 500
    let message : string = responseMessage || 'Internal Error'
    
    return res.status(status).json({
        status,
        message,
        data: []
    })
}