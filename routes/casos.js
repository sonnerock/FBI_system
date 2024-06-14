import { Router } from "express"
import { casos } from "../data/casos.js"
import { Authorization } from "../middlewares/authorization.js"

const router = Router()

router.get("/", Authorization    , async(req, res) => {
    res.json(casos)
})

export{ router }