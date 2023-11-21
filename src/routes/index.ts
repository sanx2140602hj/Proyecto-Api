import { Application } from "express";
import UserNetwork from "../utils/constants/routes.json"
import  Router  from "../utils/constants/routes.json";

function routers(app: Application){
    app.use(Router.userV1, UserNetwork); /* ⚠️⚠️⚠️ ERRO ⚠️⚠️⚠️ */
}

export default routers;