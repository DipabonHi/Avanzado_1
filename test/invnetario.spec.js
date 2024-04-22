const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const token = "12345"
const datosprueba = {
    nombreProd:"laptop", 
    cantidad:"3"
}
const invId = 2;

describe('viewinv /api/users', () =>{
    
    test("Producto no encontrado", async () => {
        return request(server.app)
        .get(`/api/users/${datosprueba}`)
        .send(datosprueba)
        .expect(404)
        .then(({body})=>{
            console.log("no encontrado")
        })
    })

    test('Producto encontrado', async () => {
        return request(server.app)
        .get(`/api/users`)
        .send(datosprueba)
        .expect(200)
    })

    test('Mostrar producto', async () => {
        return request(server.app)
        .get(`/api/users`)
        .send(datosprueba)
        .expect(200)
        .then(({body})=>{
            console.log(datosprueba)
        })
    })
})

describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
    });

});

describe("post /api/users", () => {

    test("Crear producto", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombreProd=body.nombreProd;
            
        })
    });

    test("Se puede crear Producto", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
    });

    test('Confirmación creación de producto', async () => {
        return request(server.app)
        .post(`/api/users`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect(201)
        .then(({body})=>{
            console.log("producto creado")
        })
    })
})


describe("put /api/users/:id", () => {

    test("Actualizacion Producto", async () => {
        return request(server.app)
        .put(`/api/users/${invId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })


    test(' Se actualizo producto', async () => {
        return request(server.app)
        .put(`/api/users`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect(404)
        .then(({body})=>{
            console.log("producto no encontrado")
        })
    })
})

describe("patch /api/users/:id", () => {

    test("Actualizacion Nombre Producto", async () => {
        return request(server.app)
        .put(`/api/users/${invId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log("Nombre Producto actualizado")
        })
    })

    test("Actualizacion Inventario", async () => {
        return request(server.app)
        .put(`/api/users/${invId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log("Cantidad Producto actualizado")
        })
    })
})

describe("Delete /api/users/:id", () => {

    test("Eliminacion producto", async () => {
        return request(server.app)
        .delete(`/api/users/${invId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })

    test('Confirmación Eliminación del producto', async () => {
        return request(server.app)
        .delete(`/api/users/${invId}`)
        .expect(410)
        .then(({body})=>{
            console.log("producto eliminado")
        })
    })
})


