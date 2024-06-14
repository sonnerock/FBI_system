// importamos librerias
import express from "express"


import { router as login } from "./routes/login.js"
import { router as casos } from "./routes/casos.js"

// instanciamos express
const app = express()

//manipular obj json q vienen del frontend
app.use(express.json())

// ruta raiz
app.use(express.static("static"))

//Importamos rutas
app.use("/SignIn", login)
app.use("/casos", casos)

// Levantar el servidor
app.listen(3000, () => {
    console.log("Aplicacion corriendo en puerto 3000")
})