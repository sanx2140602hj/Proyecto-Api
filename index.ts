const express = require("express")
import router from './src/network';
import { init } from './src/services/serviceLocator/composer';



const server = express();

init();

router(server)

const app = express();

const example = function(){
    console.log("estoy a la escucha");
}

router(app);

app.listen(
    9000, example
)
