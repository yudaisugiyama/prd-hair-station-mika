const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`)
});

app.get("/", (req, res) => {
    var userAgent = req.headers['user-agent'];
    var referer = req.headers['referer'];
    console.log(userAgent)
    console.log(referer)
    res.render("index");
});
app.get("/staff", (req, res) => {
    res.render("staff");
});
app.get("/fee", (req, res) => {
    res.render("fee");
});
app.get("/product", (req, res) => {
    res.render("product");
});
app.get("/access", (req, res) => {
    res.render("access");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
