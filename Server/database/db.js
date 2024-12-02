import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createPool({
    user: process.env.DB_USER || 'root',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_DATABASE || 'umcastudio',
    password: process.env.DB_PASSWORD || ''
})