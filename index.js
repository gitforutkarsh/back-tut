const express = require("express")
const userRouter = require("./routes/user")
const {connectMongoDB} = require("./connection")
const {logReqRes} = require("./middlewares/index")
const app = express();
const port = 8000

//connection
connectMongoDB("mongodb://127.0.0.1:27017/NodeJSTut")


//middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(logReqRes("log.txt"))

//routes
app.use("/api/users", userRouter)


app.listen(port, () => console.log("server started"));