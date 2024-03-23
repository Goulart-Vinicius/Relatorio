import {Router} from "express"
import User from "../controller/User.js"

const router = Router()

router.get("/", User.index)

export default router