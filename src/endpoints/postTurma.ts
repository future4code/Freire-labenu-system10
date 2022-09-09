import { Request, Response } from "express";
import insertTurma from "../data/insertTurma";
import { InsertTurma as Turma} from "../types";
import{ v4 as uuid} from 'uuid'

const postTurma = async (req: Request, res: Response) =>{
    let statusCode: number = 500;
    let {nome, modulo} = req.body;
    const id = uuid()
 try {
    if(!nome || !modulo){
     statusCode = 422
     throw new Error("Preencha todos os campos! nome da turma e módulo")
    }
await insertTurma ({id, nome, modulo})
statusCode = 200
res.status(statusCode).send({message:"Turma criada com sucesso!"})
 } catch (error: any) {
    error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
    : res.status(statusCode).send({ message: error.message });  
 }
}
export default postTurma;