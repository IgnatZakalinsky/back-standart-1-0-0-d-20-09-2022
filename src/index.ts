import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {SETTINGS} from './settings/config'
import {globalCatch} from './common/errors'

export const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({hello: 'nya 1.1'})
})

globalCatch()

// runDB().then(isDB => {
//     if (!isDB) {
//         return
//     }
    app.listen(SETTINGS.PORT, () => {
        console.log('listen port: ' + SETTINGS.PORT)
    })
// })