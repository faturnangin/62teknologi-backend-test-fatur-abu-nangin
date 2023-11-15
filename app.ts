import express from 'express';
import { Request, Response, NextFunction } from 'express';
import businessesRouter from './routes/businessesRouter';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json())

app.use("/api/v1/businesses", businessesRouter)

//Middleware to handle undefined route
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'Route not found' });
});
//Middleware to handle internal server error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))