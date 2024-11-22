import { SchoolRepository } from "../repository/schoolRepository"
import { calculateDistance } from "../utils/calculateDistance";
import logger from "../utils/logger";
import { AddSchoolInput, School } from "../utils/schoolInterface";


export const SchoolService = {
    
    async addSchool(data: AddSchoolInput): Promise<void> {
        logger.info(`Adding school: ${JSON.stringify(data)}`);
        try {
            await SchoolRepository.addSchool(data);
            logger.info(`School added successfully: ${data.name}`);
          } catch (error) {
            logger.error(`Error adding school: ${error}`);
            throw error;
          }
    },  

    async listSchools(userLat: number, userLong: number): Promise<(School & { distance: number })[]>  {
        logger.info(`Fetching all schools to calculate distances from coordinates: (${userLat}, ${userLong})`);
        try {
            const schools: School[] = await SchoolRepository.getAllSchools();
      
            const sortedSchools = schools
              .map((school) => ({
                ...school,
                distance: calculateDistance(userLat, userLong, school.latitude, school.longitude),
              }))
              .sort((a, b) => a.distance - b.distance);
      
            logger.info(`Successfully fetched and sorted ${sortedSchools.length} schools`);
            return sortedSchools;
          } catch (error) {
            logger.error(`Error fetching or sorting schools: ${error}`);
            throw error;
          }
        },

}