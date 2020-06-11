const express = require('express'); //The Express framework module
const bodyParser = required('body-parser'); //bodyparser is a module need to read the data of the request body (the data sent through the body)

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  //to read json in the request body

app.get('/', (req, res) => {
    res.send("getting root");
    console.log("getting the root")
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.delete('/profile', (req, res) => {
    const user = {
        name : "Alex",
        hobby : "swim"
    }
    res.send(user);
});

app.post('/profile', (req, res) => {
    console.log(req.body) // the request body containing the data sent to this route
    const user = {
        name : "Jane",
        hobby : "code"
    }
    res.send(user);
});

app.listen(3000);