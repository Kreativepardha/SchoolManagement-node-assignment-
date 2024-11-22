import express from 'express'
import { mainRouter } from './routes/mainRouter'
import { apiRateLimiter } from './middleware/rateLimit'
import dotenv from 'dotenv';
import { zodErrorHandler } from './middleware/zodErrorHandler';
import { globalErrorHandler } from './middleware/globalErrorHandler';
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4002


app.use(express.json())
app.use(apiRateLimiter);
app.use(zodErrorHandler as express.ErrorRequestHandler);
app.use(globalErrorHandler as express.ErrorRequestHandler);

app.use("/api/v1", mainRouter)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})