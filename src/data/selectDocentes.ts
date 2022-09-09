import { Docente } from "../types"
import { connection } from "./connection"

export default async function selectDocente(): Promise<void | Docente[]> {
    
    const result = await connection('docente')
    .select('*')

    if(!result) {
        throw new Error("Nenhum docente encontrado")
    }

    return result
}