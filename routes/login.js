import { Router } from "express"
import jwt from "jsonwebtoken"
import { results } from "../data/agentes.js"

//instancia de nuestro router para crear rutas
const router = Router()

//crear ruta para q la gente pueda validar
router.post("/", async (req, res) => {
    const { email, password } = req.body
    //Verificamos que existe el agente y sus credenciales
    const esAgente = results.some(agente => agente.email == email && agente.password == password)

    const secreto = process.env.JWT_SECRET

    if(esAgente){
        const token = jwt.sign({email: email}, secreto, {
            expiresIn: 120
        })

        res.json({
            html: `<h1>Bienvenido</h1>
            <h2>${email}</h2>
            <a href="/casos">Ver casos</a>`,
            token: token
        })
    } else {
        res.status(401).send("Usuario Invalido")
    }
})

export {router}