import { connection } from "./connection";
import { Estudante } from "../types";

export const selectEstudanteByNome = async (nome: string): Promise<void | Estudante[]> => {
    const result = await connection("estudante")
        .select("*")
        .where("nome", "LIKE", `%${nome}%`);

    if (!result.length) {
        throw new Error("Nenhum estudante encontrado");
    }

    return result
}