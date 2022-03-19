import request from 'supertest';
import app from '../app';



describe('GET /api/usuarios', ()=>{
    it('Should respond with a 200 status code', async () => {
        const response = await request(app).get('/api/usuarios').send();
        expect(response.statusCode).toBe(200);
    });

    it('Should respond with an Object',async () => {
        const response=await request(app).get('/api/usuarios').send();
        expect(response.body).toBeInstanceOf(Object);
    });
});

describe('POST /api/usuarios', () => { 
    describe('given an usuario', () => { 

        const newUsuario = {usuario:'usuario'};
        // should respond with a 200 status code 
        test('should respond with a 200 status code', async () => { 
            const response = await request(app).post('/api/usuarios').send(newUsuario);
            expect(response.statusCode).toBe(200);
        });

        //should respond with a content-type of application/json  
        test('should have a content-type: application/json in header',async () => {
            const response =await request(app).post('/api/usuarios').send(newUsuario);
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        //should respond with a json object containing the new usuario  with a id
        test('should respond with an usuario id', async ()=>{
            const response= await request(app).post('/api/usuarios').send(newUsuario);
            // console.log(response.body);
            expect(response.body.id).toBeDefined();
        });
    });

    describe('when usuario is missing', () => { 
        test('should respond with a 400 status code', async ()=>{
            const response = await request(app).post('/api/usuarios').send({});
            expect(response.statusCode).toBe(400);
        });
    });

});

describe('PUT /api/usuarios', () => {
    // should respond with a 200 status code
    test('should respond with a 200 status code', async () => {
        const response = await request(app).put('/api/usuarios/:id').send();
        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE /api/usuarios', () => {
    // should respond with a 200 status code
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/api/usuarios/:id').send();
        expect(response.statusCode).toBe(200);
    });
});