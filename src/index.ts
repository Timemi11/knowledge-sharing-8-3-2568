import express from "express";
import cors from "cors";
import { Request, Response } from 'express';
import AppRoute from "./routes/message.routes";

const app = express();
const PORT = 3001;


app.use(
    cors({
        origin: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);
app.use(express.json());



app.use("/api/v1", AppRoute);
app.get("/api/", (req: Request, res: Response) => {
    res.send("server ok :" + PORT);
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
