import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import postEstudante from "./endpoints/postEstudante"
import putEstudanteTurma from "./endpoints/putEstudanteTurma"
import getEstudantes from "./endpoints/getEstudantes"
import postTurma from "./endpoints/postTurma"
import getTurma from "./endpoints/getTurma"
import putTurma from "./endpoints/putTurma"
import postDocente from "./endpoints/postDocente"
import getDocentes from "./endpoints/getDocentes"
import putDocenteTurma from "./endpoints/putDocenteTurma"

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.send("Server is running"))

app.get("/estudante", getEstudantes)
app.post("/estudante", postEstudante)
app.put("/estudante/", putEstudanteTurma)

app.get("/turma", getTurma)
app.post("/turma", postTurma)
app.put("/turma", putTurma)

app.post("/docente", postDocente)
app.get("/docentes", getDocentes)
app.put("/docente", putDocenteTurma)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});