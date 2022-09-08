export type Turma = {
    id: string,
    nome: string,
    docentes: Array<Docente>,
    estudantes: Array<Estudante>,
    modulo: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export type InsertTurma = {
    id:string,
    nome:string,
    modulo: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export type Estudante = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export type Docente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}