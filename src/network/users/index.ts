import express, {Request, Response} from "express";

const router = express.Router();

function getUserByEmail(req: Request, res: Response){
    const{email} =req.params;
}

router.get("/", getUserByEmail)
router.post("/", getUserByEmail)

export default router
/* function userGet() {
    return 'userGet'
}

export default userGet; */