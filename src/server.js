require ("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;//check for correct port or use 5001
const userRouter = require("./user/routes");

app.use(express.json());
app.use(cors());//enables external fetch requests
app.use(userRouter);

app.listen(port, ()=>{//By placing port number in variable, we can change the port number and the instruction stays the same
    console.log(`Listening on port ${port}`);
});