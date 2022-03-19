import  express ,{ Application} from 'express';
import routerUsuario from './routers/usuario';


const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/api/usuarios', routerUsuario);

export default app;