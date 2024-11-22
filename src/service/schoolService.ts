import { SchoolRepository } from "../repository/schoolRepository"
import { calculateDistance } from "../utils/calculateDistance";









export const SchoolService = {
    
    async addSchool(data: {
        name: string,
        address: string,
        latitude: number,
        longitude: number
    }) {
        await SchoolRepository.addSchool(data);
        //
    },  

    async listSchools(userLat: number, userLong: number) {

        const schools = await SchoolRepository.getAllSchools();
      
        const sortedSchools = schools.map((school: any) => ({
            ...school,
            distance: calculateDistance(userLat, userLong, school.latitude, school.longitude),
        })).sort((a: any, b: any) => a.distance - b.distance);

        // await redis.set('schools', JSON.stringify(sortedSchools), 'EX', 3600); // Cache for 1 hour
     
        return sortedSchools;        


    }

}