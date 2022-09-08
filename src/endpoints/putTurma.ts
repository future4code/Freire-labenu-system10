import { Request, Response } from "express";
import selectTurmaById from "../data/selectTurmaById";
import updateTurma from "../data/updateTurma";

const putTurma = async (req: Request, res: Response) => {

    let statusCode: number = 500;
    let { id, modulo } = req.body;

    try {

        if (!id || !modulo) {
            statusCode = 422;
            throw new Error("Preencha todos os campos! id e modulo");
        }
        
        await selectTurmaById(id).catch((error) => {statusCode = 404; throw new Error(error.message)});

        await updateTurma(id, modulo)
        statusCode = 200;
        res.status(statusCode).send({ message: "Módulo atualizado com sucesso!" });

    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }


};

export default putTurma;