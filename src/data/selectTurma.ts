import { connection } from "./connection";
import { InsertTurma as Turma} from "../types";



const selectTurma = async (): Promise<any | Turma> => {
    const result = await connection("turma")
        .select("*") 
      

        if (result.length === 0) {
            throw new Error("Turma não encontrada")
        }

        return result
}

export default selectTurma;