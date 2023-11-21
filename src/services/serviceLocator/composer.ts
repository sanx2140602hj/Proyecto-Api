import { Connection } from "mysql2";
import { DependencyLocator } from "./dependenciesLocator";
import database from "../database"
import { UsersUtils } from "../../utils/users";

export const di = DependencyLocator.getInstance(); /* Se creo "di" con ayuda de metodo ""dependenciesLocator.ts"" */

const types = {
    database: "database-conexion", /* configuracion para todas siempre tener la misma variable */
    users: "users-utils"
}

function getDatabase(): Connection {
    return di.get(types.database)
}

export function init() {
    di.bindLazySingleton(types.database, () => database) /* aqui se agrega la base de datos al servidor */
    di.bindFactory(types.users, () =>
        new UsersUtils(
            getDatabase()  /* aqui se inyecta el servicio de la base de datos R=https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com.mx%2Fpin%2F771100767466087159%2F&psig=AOvVaw1arrGT54oCYECZHHC5Lpfg&ust=1699486485183000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiMqtOGs4IDFQAAAAAdAAAAABAE */
        )
    )
}


/* function init() {
di.bindFactory(types.database, () => database);
di. bindFactory(types.users, () => new UserUti1s(getDatabase()))}; */