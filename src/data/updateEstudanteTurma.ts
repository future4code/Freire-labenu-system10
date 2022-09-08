import { connection } from "./connection";

const updateEstudanteTurma = async (id: string, turma_id: string): Promise<void> => {
    await connection("estudante").update({ turma_id }).where({ id });
}

export default updateEstudanteTurma;