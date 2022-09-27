import {app} from './index'
import {destruct} from './s2-common/errors'

describe('check-env', () => {
    it('check-env1', () => {
        app
        console.log(destruct(process.env))
        expect(1).toBe(1)
    })
})