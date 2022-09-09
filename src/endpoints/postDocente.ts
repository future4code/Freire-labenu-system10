
import { Request, Response } from "express"
import insertDocente from "../data/insertDocente"
import { InsertDocente } from "../types"
import { v4 as uuid } from "uuid"
import moment from "moment"

export default async function postDocente(req: Request, res: Response) {

    const { nome, email, data_nasc, turma_id }: InsertDocente = req.body

    try {
        if( !nome || !email || !data_nasc ) {
            throw new Error("O nome, email e data de nascimeto devem ser passados!")
        }

        const nascimento = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD")

        await insertDocente({ 
            id: uuid(), 
            nome, 
            email, 
            data_nasc: nascimento, 
            turma_id 
        })

        res.status(201).send({ message: "Estudante criado com sucesso!" })
        
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}