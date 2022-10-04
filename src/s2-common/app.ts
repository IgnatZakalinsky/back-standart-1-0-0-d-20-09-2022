import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {globalCatch} from './errors'
import {useRoutes} from './routes'
import cookieParser from 'cookie-parser'

globalCatch()

export const app = express()

app.use(cors())
app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

///////////////////////////////

useRoutes(app)