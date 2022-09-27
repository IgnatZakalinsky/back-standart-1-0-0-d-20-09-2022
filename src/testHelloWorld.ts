import {RequestType, ResponseType} from './s3-test/req-res-helper'

export type HelloWorldType = {
    hello: string
}

export const testHelloWorld = (req: RequestType, res: ResponseType) => {
    res.status(200).json({hello: 'world!'})
}