import { Connection } from "mysql2";
import redis from "../../services/redis"

export class UsersUtils {

    private database;

    constructor(db: Connection) {
        this.database = db;
    }

   async /* function */ getUser() {
    const existCache = await redis.get('allUsers');
    if (existCache) {
        return JSON.parse(existCache); /* cambia cualquier formato de texto a objeto */
    }
    const [rows, field] = await this.database.query("SELECT * FROM users")
    const sendable = {
        rows,           /* preparas el obejto para almacenar en redis */
        field
    }
    await redis.set('allUsers', JSON.stringify(sendable)); /* se almacena en tipo objeto */
    
    const todayEnd = new Date().setHours(23,59,59,999);

    redis.expireAt("allUsers", todayEnd/1000);

    return sendable

}

}