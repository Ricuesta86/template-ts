import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port:string = process.env.PORT || '3000';

app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto: '+port);
});

