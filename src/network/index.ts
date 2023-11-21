import { Application } from 'express';
import Router  from '../utils/constants/routes.json';
import UsersNetwork from "./users"


function routes(server: Application){
    server.use(Router.users, UsersNetwork)
}

export default routes;