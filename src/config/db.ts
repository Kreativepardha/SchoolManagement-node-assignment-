import mysql from 'mysql2/promise';
import { config } from './config';


export const db = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
})

export const testConnection = async () => {
    try {
        const [rows] = await db.query('SELECT 1');
        console.log('Database connection successful:', rows);
    } catch (err) {
        console.error('Database connection failed:', err);
    }
};
testConnection();