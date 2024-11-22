import { Router } from "express";
import { SchoolController } from "../controller/schoolController";
import { listSchoolsLimit } from "../middleware/rateLimit";



const router = Router()

router.post('/addschool', SchoolController.addSchoolSchema)
router.get('/listschool', listSchoolsLimit,SchoolController.listSchools)


    
export {
    router as mainRouter
}