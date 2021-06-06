import  express,{Request, Response} from 'express';
import { ROUTES } from './routes';
export const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
ROUTES.forEach(({path,router})=>{
   app.use(path,router)
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );