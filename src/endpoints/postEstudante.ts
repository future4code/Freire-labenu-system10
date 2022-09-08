import { Request, Response } from "express";
import insertProduct from "../data/insertEstudante";
import { v4 as uuid } from "uuid";
import selectTurmaById from "../data/selectTurmaById";
import selectEstudanteByEmail from "../data/selectEstudanteByEmail";
import moment from "moment";
import { error } from "console";


const postEstudante = async (req: Request, res: Response) => {

    let statusCode: number = 500;
    let { nome, email, data_nasc, turma_id } = req.body;
    const id: string = uuid();

    try {

        if (!nome || !email || !data_nasc || !turma_id) {
            statusCode = 422;
            throw new Error("Preencha todos os campos! nome, email, data_nasc e turma_id");
        }

        if (nome.length < 3) {
            statusCode = 400;
            throw new Error("O nome deve ter no mínimo 3 caracteres");
        }

        if (email.indexOf("@") === -1) {
            statusCode = 400;
            throw new Error("E-mail inválido, digite um e-mail válido!");
        }

        if (moment(data_nasc, "DD/MM/YYYY", true).isValid() === false) {
            statusCode = 400;
            throw new Error("Data de nascimento inválida, digite no formato DD/MM/YYYY");
        }

        data_nasc = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD");
        await selectTurmaById(turma_id).catch((error) => {statusCode = 404; throw new Error(error.message)});
        await selectEstudanteByEmail(email).catch((error) => {statusCode = 409; throw new Error(error.message)});

        await insertProduct({ id, nome, email, data_nasc, turma_id });
        res.status(201).send({ message: "Estudante criado com sucesso!" });


    } catch (error) {
        error.sqlMessage ? res.status(statusCode).send({ message: error.sqlMessage })
            : res.status(statusCode).send({ message: error.message });
    }

};

export default postEstudante;