import { connection } from "./connection";
import { Turma } from "../types";


const selectTurmaById = async (id: string): Promise<any | Turma> => {
    const result = await connection("turma")
        .select("*")
        .where({ id })

        if (result.length === 0) {
            throw new Error("Turma não encontrada")
        }

        return result[0]
}

export default selectTurmaById;