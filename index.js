const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:3000",
        ],
        credentials: true
    })
);

app.get('/getArticle', function(req, res) {
    res.json({
        title: "How to create my app?",
        sub_title: "By Ivan Cabral",
        image: "https://i.imgur.com/KnlvuaC.png",
        body: "Thanks to see my post!",
        tags: ["react", "app", "project", "2020"]
    });
});

app.listen(4000, function() {
    console.log("App listening on port 3000!");
});