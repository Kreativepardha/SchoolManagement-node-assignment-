import {z} from 'zod'


export const addSchoolSchema = z.object({
    name: z.string().min(3, "Name should be atleast 3 characters Long."),
    address: z.string().nonempty("Address is required"),
    latitude: z.number().min(-90).max(90, 'Invalid latitude'),
    longitude: z.number().min(-180).max(180, 'Invalid longitude'),
})


export const listSchoolSchema = z.object({
    latitude: z.number().min(-90).max(90, 'Invalid latitude'),
    longitude: z.number().min(-180).max(180, 'Invalid longitude'),
})