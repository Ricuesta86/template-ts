import  express ,{ Application} from 'express';
import routerUsuario from './routers/usuario';
import cors from 'cors';
import path from 'path';
import db from './db/conexionDB';


const app: Application = express();

//Middleware

//Cors
app.use(cors());

//Lectura del body
app.use(express.json());
//app.use(express.urlencoded());

//Carpeta pública
app.use( express.static(path.resolve(__dirname,'public')));

app.use('/api/usuarios', routerUsuario);



try {
    db.authenticate();
    console.log('Database online');
} catch (e) {
    throw new Error('Error');
}


export default app;