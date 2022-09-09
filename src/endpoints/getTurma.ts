import { Request, Response } from "express";
import selectTurma from "../data/selectTurma";

const getTurma = async (req: Request, res: Response) => {
  let statusCode: number = 500;

  try {
    const result = await selectTurma().catch((error) => {
      statusCode = 404;
      throw new Error(error.message);
    });
    statusCode = 200;
    res.status(statusCode).send(result);
  } catch (error: any) {
    error.sqlMessage
      ? res.status(statusCode).send({ message: error.sqlMessage })
      : res.status(statusCode).send({ message: error.message });
  }
};

export default getTurma;
