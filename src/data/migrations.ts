import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const dropTables = () => connection.raw(`
   DROP TABLE IF EXISTS estudante;
   DROP TABLE IF EXISTS docente;
   DROP TABLE IF EXISTS turma;
   `)
   .then(() => { console.log("Tabelas deletadas") })
   .catch(printError)


const createTables = () => connection
   .raw(`
      CREATE TABLE turma(  
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            modulo VARCHAR(255) DEFAULT "0"
      );
      
      CREATE TABLE estudante(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255),
            FOREIGN KEY (turma_id) REFERENCES turma(id)
      );
      
      CREATE TABLE docente(
            id VARCHAR(255) PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            data_nasc DATE NOT NULL,
            turma_id VARCHAR(255),
            FOREIGN KEY (turma_id) REFERENCES turma(id)
      );
`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertTurmas = () => connection.raw(`
   INSERT INTO turma (id, nome, modulo)
   VALUES   ("76ae7e90-4196-4c7a-8a5f-15198821a0f8", "Freie", "0"),
            ("44345f53-d1a1-49ad-879a-c3a7cfdc5197", "Silveira", "0"),
            ("ec9451c5-38be-48ad-982e-0ad1d113c29b", "Ailton", "0"),
            ("04e37446-1c03-4f8d-8e77-ef5fbf363ece", "Silveira", "0");
`)
   .then(() => { console.log("Turmas criadas!") })
   .catch(printError)

const insertEstudantes = () => connection.raw(`
   INSERT INTO estudante (id, nome, email, data_nasc, turma_id)
   VALUES   ("1c3b586c-e728-4f3e-a429-5e0bf4947d9b", "Jose Pereira", "jose@labenu.com", "1985-12-17", "76ae7e90-4196-4c7a-8a5f-15198821a0f8"),
            ("4ed68533-9954-40f3-858a-e20775341a98", "Luiz Henrique", "luiz@labenu.com", "1985-12-17", "76ae7e90-4196-4c7a-8a5f-15198821a0f8"),
            ("5052e71d-a8e2-439a-b980-11ccf134eaa1", "Felipe Luiz", "felipe@labenu.com", "1985-12-17", "ec9451c5-38be-48ad-982e-0ad1d113c29b"),
            ("a3b8d425-2b60-4ad7-ad4b-f7dfd3d1a3cf", "João da Silva", "joao@labenu", "1985-12-17", "44345f53-d1a1-49ad-879a-c3a7cfdc5197");
   `)


const insertDocentes = () => connection.raw(`
   INSERT INTO docente (id, nome, email, data_nasc, turma_id)
   VALUES   ("1c3b586c-e728-4f3e-a429-5e0bf4947d9b", "Andre Santos", "andre@labenu.com", "1985-12-17", "76ae7e90-4196-4c7a-8a5f-15198821a0f8"),
            ("4ed68533-9954-40f3-858a-e20775341a98", "João Vitor", "vitor@labenu.com", "1985-12-17", "76ae7e90-4196-4c7a-8a5f-15198821a0f8"),
            ("5052e71d-a8e2-439a-b980-11ccf134eaa1", "Ana Caroline", "ana@labenu.com", "1985-12-17", "ec9451c5-38be-48ad-982e-0ad1d113c29b"),
            ("a3b8d425-2b60-4ad7-ad4b-f7dfd3d1a3cf", "Vanessa Alencar", "vanessa@labenu", "1985-12-17", "44345f53-d1a1-49ad-879a-c3a7cfdc5197");
   `)
   .then(() => { console.log("Docentes criados!") })
   .catch(printError)

   .then(() => { console.log("Estudantes criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

dropTables()
   .then(createTables)
   .then(insertTurmas)
   .then(insertEstudantes)
   .then(insertDocentes)
   .finally(closeConnection)