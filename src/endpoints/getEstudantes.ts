import { Request, Response } from "express";
import { selectEstudanteByNome } from "../data/selectEstudantes";

const getEstudantes = async (req: Request, res: Response) => {

    let statusCode: number = 500;
    const { nome } = req.query;

    try {

        if (nome) {
            const result = await selectEstudanteByNome(nome as string)
                .catch((error) => { statusCode = 404; throw new Error(error.message) });
            statusCode = 200;
            res.status(statusCode).send(result);
        }


        if (!nome) {
            const result = await selectEstudanteByNome("")
                .catch((error) => { statusCode = 404; throw new Error(error.message) });
            statusCode = 200;
            res.status(statusCode).send(result);
        }
    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }

};

export default getEstudantes;