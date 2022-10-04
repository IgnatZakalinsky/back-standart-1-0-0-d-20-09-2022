import {agent as request} from 'supertest'
import {app} from '../s2-common/app'

describe('Post Endpoints', () => {
    const testApp = request(app)

    it('get 1', async () => {
        const res = await testApp
            .get('/t')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('get 2', async () => {
        const res = await testApp
            .get('/t/2')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('get 3', async () => {
        const res = await testApp
            .get('/tq?b=3')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })

    it('post 4', async () => {
        const res = await request(app)
            .post('/t')
            .send({
                b: 4,
            })

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('put 5', async () => {
        const res = await request(app)
            .put('/t')
            .send({
                b: 5,
            })

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('delete 6', async () => {
        const res = await request(app)
            .delete('/t')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('delete 7', async () => {
        const res = await request(app)
            .delete('/t/7')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })

    ///

    it('get 8', async () => {
        const res = await request(app)
            .get('/th')
            .set('authorization', 'Basic YWRtaW46cXdlcnR5')

        console.log({body: res.body})
        expect(res.statusCode).toBe(200)
    })
    it('get 9', async () => {
        const res = await request(app)
            .get('/tc')
            .set('Cookie', ['c1=9;c2=11'])

        console.log({body: res.body, headers: res.headers})
        expect(res.statusCode).toBe(200)
    })

})