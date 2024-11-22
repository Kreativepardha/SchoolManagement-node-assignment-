import { NextFunction, Request, Response } from "express";
import { addSchoolSchema, listSchoolSchema } from "../utils/validation";
import { error } from "console";
import { SchoolService } from "../service/schoolService";
import logger from "../utils/logger";









export const SchoolController = {

    async addSchoolSchema(req: Request, res: Response, next: NextFunction) {
        try {
            const data  = addSchoolSchema.parse(req.body);
            await SchoolService.addSchool(data);
            logger.info("Schools listed successfully");
            res.status(201).json({
                message: 'School Added Succesffully',
                data: data
            })

        } catch (err: any) {
            logger.error(`Error in listSchools controller: ${error}`);
            next(err);
        }
    },

    async listSchools(req: Request, res: Response, next: NextFunction) {
        try {
            const { latitude, longitude } = listSchoolSchema.parse(req.query);
            
            const schools = await SchoolService.listSchools(Number(latitude), Number(longitude));

            res.status(200).json({
                schools,
                message: ''
            })

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    


}