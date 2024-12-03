import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import 'colors'
import { db } from './database/db.js'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes.js'
dotenv.config()
const app = express()
// database connection
db.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed:', err.message);
      return;
    }
    console.log('Database connected successfully!'.bgMagenta);
    connection.release(); 
  });


app.use(cors())
app.use(bodyParser.json())

// routes here 
app.get('/', (req, res) => {
    res.send('<h1>Hello UMCA </h1>')
})
app.use('/api/v1',userRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`.america)
})