const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Testing Express</Title>
    </head>
    <body>
    <h1>Hello World!</h1>
    ${req.query.page ? req.query.page : "No Page Asked For"}
    </body>
    </html>
    `));  //response & request usually named res & req

app.listen(port, () => console.log(`Is this inspiring? --> listening on port http://localhost:${port}`));


// app.get("/", (req, res) => res.send(req.query));