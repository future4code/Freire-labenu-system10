import { connection } from "./connection";
import { InsertTurma as Turma } from "../types";

const insertTurma = async (turma: Turma) => {
  await connection("turma").insert({
    id: turma.id,
    nome: turma.nome,
    modulo: turma.modulo,
  });
};

export default insertTurma;
