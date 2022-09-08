import { connection } from "./connection";
import { Estudante } from "../types";


const selectEstudanteById = async (id: string): Promise<any | Estudante> => {
    const result = await connection("estudante")
        .select("*")
        .where({ id })

        if (result.length === 0) {
            throw new Error("Estudante não encontrada")
        }

        return result[0]
}

export default selectEstudanteById;