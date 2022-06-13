require ("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;//check for correct port or use 5001

app.use(express.json());

app.listen(port, ()=>{//By placing port number in variable, we can change the port number and the instruction stays the same
    console.log(`Listening on port ${port}`);
});