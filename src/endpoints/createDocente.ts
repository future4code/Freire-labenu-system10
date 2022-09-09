import { Request, Response } from "express"
import { Docente, DocenteInput } from "../types"
import { v4 as uuid } from 'uuid'
import insertDocente from "../data/insertDocente"
import moment from "moment"

export default async function createDocente(req: Request, res: Response){
    try {

        const { nome, email, data_nasc } = req.body

        if(!nome || !email || !data_nasc) {
            throw new Error('O nome, email e datade nascimento devem ser passados.')
        }

        const docenteInsert: Docente = {
            id: uuid(),
            nome: req.body.nome,
            email: req.body.email,
            data_nasc: moment(req.body.data_nasc, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            turma_id: uuid()
        }

        const answer = await insertDocente(docenteInsert)

        res.status(201).send({message: answer})
        
    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}