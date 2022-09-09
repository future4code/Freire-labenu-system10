import { Docente } from "../types";
import { connection } from "./connection";

export default async function insertDocente(Docente: Docente): Promise<void> {
    await connection("docente").insert({
        id: Docente.id,
        nome: Docente.nome,
        email: Docente.email,
        data_nasc: Docente.data_nasc,
        turma_id: Docente.turma_id
    })
}