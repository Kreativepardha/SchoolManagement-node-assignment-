import dotenv from 'dotenv';
dotenv.config()

export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.password || '',
        database: process.env.DB_NAME || 'schools',

    },
    //redis config next 
}