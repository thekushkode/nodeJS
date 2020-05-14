const express = require("express");
const app = express();
let data = require("./data");
const port = 8000;

//route parameters = (params)
//query parameters = (query)
function logger(req, res, next) {
    console.log("This is your request: ", req)
    next();
};

//This is the middleware. based on location in doc do "x" with response data
//Should be above routes (best practices- 99% of the time)
app.use("/cat", logger);
app.use(express.static('public'));

app.get("/cat", (req, res) => res.send(data.filter(animal => animal.type == "cat")));
app.get("/dog", (req, res) => res.send(data.filter(animal => animal.type == "dog")));
app.get("/color/:color", (req, res) => res.send(data.filter(animal => animal.color == req.params.color)));

app.get("/:id", (req, res) => res.send(data.filter(a => a.id == req.params.id)));
app.get("/:age", (req, res) => res.send(data.filter(a => a.age == req.params.age)));
app.get("/", (req, res) => {
    let newData = [...data];
    if (req.query.color) {
        newData = newData.filter(animal => animal.color == req.query.color)
    }
    if (req.query.age) {
        newData = newData.filter(animal => animal.age == req.query.age)
    }
    if (newData != data) {
        res.json(newData);
    } else {
        res.json(data);
    }
});


app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));