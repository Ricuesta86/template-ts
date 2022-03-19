import express, { Application } from 'express';
import routerUsuario from '../routers/usuario';

export class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor () {
        this.app=express();
        this.port = process.env.PORT || '3000';


        //Definir todas las rutas
        this.router();
    }

    router(){
        this.app.use( this.apiPaths.usuarios, routerUsuario );
    }

    listen () {
        this.app.listen( this.port, ()=>{
            console.log( 'Servidor corriendo en el puerto '+this.port );
        });
    }
}


