import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import {SETTINGS} from './s1-settings/config'
import {globalCatch} from './s2-common/errors'
import {testHelloWorld} from './testHelloWorld'
import {runDB} from './s2-common/mongo'

globalCatch()

export const app = express()

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

///////////////////////////////

app.get('/', testHelloWorld)

runDB().then(isDB => {
    if (!isDB) {
        return
    }
    app.listen(SETTINGS.PORT, () => {
        console.log('listen port: ' + SETTINGS.PORT)
    })
})