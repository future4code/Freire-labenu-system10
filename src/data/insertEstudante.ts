import { connection } from "./connection";
import { Estudante } from "../types";

const insertEstudante = async (Estudante: Estudante): Promise<void> => {
    await connection("estudante").insert({
        id: Estudante.id,
        nome: Estudante.nome,
        email: Estudante.email,
        data_nasc: Estudante.data_nasc,
        turma_id: Estudante.turma_id
    })
}

export default insertEstudante;