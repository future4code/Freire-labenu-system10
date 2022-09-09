import { Request, Response } from "express";
import selectEstudanteById from "../data/selectEstudanteById";
import selectTurmaById from "../data/selectTurmaById";
import updateEstudanteTurma from "../data/updateEstudanteTurma";


const putEstudanteTurma = async (req: Request, res: Response) => {

    let statusCode: number = 500;
    let { id, turma_id } = req.body;

    try {

        if (!id || !turma_id) {
            statusCode = 422;
            throw new Error("Preencha todos os campos! id e turma_id");
        }

        const estudante = await selectEstudanteById(id).catch((error) => {statusCode = 404; throw new Error(error.message)});
        await selectTurmaById(turma_id).catch((error) => {statusCode = 404; throw new Error(error.message)});

        if (estudante.turma_id === turma_id) {
            statusCode = 409;
            throw new Error("Estudante já está matriculado nesta turma");
        }

        await updateEstudanteTurma(id, turma_id)
        statusCode = 200;
        res.status(statusCode).send({ message: "Estudante atualizado com sucesso!" });

    } catch (error: any) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }


};

export default putEstudanteTurma;