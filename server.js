const express = require('express');
const path = require('path');

// create express app

const app = express();

app.use(
    express.static(
        path.join(__dirname, 'views') //
    )
)

//app.get("/", function (req,res) {
//    res.send("<h1>Home</h1>>");
//});

const port = process.env.PORT || 14731;

app.listen(port);

console.log(`Server running: http://localhost:${port}`);

