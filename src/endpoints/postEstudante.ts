import { Request, Response } from "express";

const postEstudante = async (req: Request, res: Response) => {

    let statusCode: number = 500;

    try {

        
    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
        : res.status(statusCode).send({ message: error.message });
    }

};

export default postEstudante;