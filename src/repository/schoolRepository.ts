import { db } from "../config/db";



export const SchoolRepository = {
    async addSchool(data: {
        name: string; 
        address: string,
        latitude: number; 
        longitude: number 
    }){
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ? , ? ,?)'
        await db.query(query, [data.name, data.address, data.latitude, data.longitude])
    },

    async getAllSchools() {
        const [rows] = await db.query(`SELECT * FROM schools`);
        return rows;
    },
}