import cookieParser from "cookie-parser";
import cors from 'cors';
import Express from "express";
import bodyParser from "body-parser";
import { dbConnect } from "./src/db/connectTodb.mjs";
import register from "./src/db/register.mjs";
import login from "./src/db/login.mjs";
import addTudu from "./src/db/addTudu.mjs";
const app = Express();
dbConnect()
// connecting to db

//connecting to express
app.use(Express.json());
app.use(cookieParser())



// CORS configuration options

// Use the CORS middleware
app.use(cors({origin:'http://localhost:3000'}));

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.get("/", (req, res) => {
        res.status(200).send("Engine Started, Ready to take off!");
})
app.post('/',(req, res) => {
  res.status(200).send("Engine Started, Ready to take off!");
})
//register
app.post("/register",register)

//login
app.post("/user/login",login)

//Add a personal Task
app.post('personal/addTudu',addTudu)
const port = 4000
app.listen(port, () => {
    console.log(`Here we go, Engines started at ${port}.`);
})

