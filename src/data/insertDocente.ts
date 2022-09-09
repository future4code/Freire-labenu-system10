import { Docente } from "../types";
import { connection } from "./connection";

export default async function insertDocente(insertDocente: Docente): Promise<string> {

    const { id, nome, email, data_nasc, turma_id } = insertDocente

    await connection("DOCENTE")
    .insert({
        id,
        nome,
        email,
        data_nasc,
        turma_id
    })

    return `Docente ${nome} criado com sucesso`
}