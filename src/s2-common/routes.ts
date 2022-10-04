import {testHelloWorld} from '../testHelloWorld'
import {Express} from 'express'
import {testsRoute} from '../s3-test/testsRoute'

export const useRoutes = (app: Express) => {
    app.get('/', testHelloWorld)

    app.use('/', testsRoute)
    //
}

