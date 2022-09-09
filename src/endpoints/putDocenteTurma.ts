import { Request, Response } from "express";
import selectDocente from "../data/selectDocente";
import selectTurmaById from "../data/selectTurmaById";
import updateDocenteTurma from "../data/updateDocenteTurma";

export default async function putDocenteTurma(req: Request, res: Response) {

    let { id, turma_id } = req.body

    try {

        if( !id || !turma_id ) {
            throw new Error("Preencha todos os campos! id e turma_id")
        }

        const docente = await selectDocente(id)
        await selectTurmaById(turma_id)

        if (docente.turma_id === turma_id) {
            throw new Error("Estudante já está matriculado nesta turma");
        }

        await updateDocenteTurma(id, turma_id)
        res.status(200).send({ message: "Estudante atualizado com sucesso!" });
    
        
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}