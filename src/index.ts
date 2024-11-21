import express from 'express'
import 'dotenv'
import { mainRouter } from './routes/mainRouter'

const app = express()
const PORT = process.env.PORT || 4000 


app.use(express.json())

app.use("/api/v1", mainRouter)



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})