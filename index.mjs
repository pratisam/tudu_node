import cookieParser from "cookie-parser";
import cors from 'cors';
import Express from "express";
import bodyParser from "body-parser";
import { dbConnect } from "./src/db/connectTodb.mjs";
import register from "./src/db/register.mjs";
const app = Express();
dbConnect()
// connecting to db

//connecting to express
app.use(Express.json());
app.use(cookieParser())
app.use(cors({orgin:'*'}))
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.get("/", (req, res) => {
        res.status(200).send("Engine Started, Ready to take off!");
})
//login
app.post("/register",register)

const port = 4000
app.listen(port, () => {
    console.log(`Here we go, Engines started at ${port}.`);
})

