import express, { Request, Response } from 'express';
import login from './routes/login'

console.log("FUT a server")
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use("/login", login)

app.get("/", (req: Request, res: Response) => {
    res.json("OK")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})
