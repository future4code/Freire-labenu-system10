import { Docente } from "../types";
import { connection } from "./connection";

export default async function selectDocente(id: string): Promise<any | Docente> {
    
    const result = await connection("docente")
    .select('*')
    .where({ id })

    if (result.length === 0) {
        throw new Error("Docente não encontrado")
    }

    return result[0]
}