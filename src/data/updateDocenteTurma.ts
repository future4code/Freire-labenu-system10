import { connection } from "./connection";

export default async function updateDocenteTurma(id: string, turma_id: string): Promise<void> {
    
    await connection("docente")
    .update({ turma_id })
    .where({ id });
}