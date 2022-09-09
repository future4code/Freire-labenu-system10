import { Request, Response } from "express"
import selectDocentes from "../data/selectDocentes"

export default async function getDocentes(req: Request, res: Response) {

    try {
        const result = await selectDocentes()
        res.status(200).send({result})
        
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}