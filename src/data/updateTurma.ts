import { connection } from "./connection";

const updateTurma = async (id: string, modulo: string): Promise<void> => {
    await connection("turma").update({ modulo }).where({ id });
}

export default updateTurma;