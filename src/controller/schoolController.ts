import { Request, Response } from "express";
import { addSchoolSchema, listSchoolSchema } from "../utils/validation";
import { error } from "console";









export const SchoolController = {
 
 
    async addSchoolSchema(req: Request, res: Response) {
        try {
            const data  = addSchoolSchema.parse(req.body);
            // await 

            res.status(201).json({
                message: 'School Added Succesffully'
            })

        } catch (err: any) {
            res.status(400).json({
                error: err.message
            })
            
        }
    }

    async listSchools(req: Request, res: Response) {
        try {
            const { latitude, longitude } = listSchoolSchema.parse(req.query);
            // 
            res.status(200).json({
                // schools,
                message: ''
            })
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    


}