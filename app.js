const express = require('express');
const app = express();
const PORT = 3000;
app.get("/", (request, response) =>{
    response.send("Hello World!");
})
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})
