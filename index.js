var express = require("express");
var app = express();
app.listen("3000", function () {
    console.log("app listening...");
});
app.get("/", function (req, res) {
    res.json({ name: "jhhij ygu i", date: "ijndihih" });
});
