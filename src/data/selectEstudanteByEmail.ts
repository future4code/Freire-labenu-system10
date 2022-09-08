import { connection } from "./connection";

const selectEstudanteByEmail = async (email: string): Promise<any> => {
    const result = await connection("estudante")
        .select("*")
        .where({ email })

        if (result.length > 0) {
            throw new Error("E-mail já cadastrado")
        }
}

export default selectEstudanteByEmail;