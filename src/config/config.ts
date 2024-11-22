import dotenv from 'dotenv';
dotenv.config()

export const config = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.password || 'root',
        database: process.env.DB_NAME || 'school_management',

    },
    //redis config next 
}