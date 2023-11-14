import express from 'express';
import router from './routes/bookRouter';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json())

app.use("/api/v1/book", router)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))