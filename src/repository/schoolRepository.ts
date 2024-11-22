import { db } from "../config/db";
import { School } from "../utils/schoolInterface";

export const SchoolRepository = {
    async addSchool(data: { name: string; address: string; latitude: number; longitude: number }) {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        try {
            await db.query(query, [data.name, data.address, data.latitude, data.longitude]);
        } catch (error) {
            console.error('Error adding school:', error);
            throw new Error('Failed to add school');
        }
    },

    async getAllSchools() {
        try {
            const [rows] = await db.query('SELECT * FROM schools');
            return rows as School[];
        } catch (error) {
            console.error('Error fetching schools:', error);
            throw new Error('Failed to fetch schools');
        }
    },
};
