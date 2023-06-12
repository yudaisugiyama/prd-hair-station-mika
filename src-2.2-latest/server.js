const express = require("express");
const app = express();
const PORT = 3000;

const regex = /Windows|Macintosh|iPad|Mac/;

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
    const iswide = regex.test(userAgent);
    const template = iswide ? "index_pc" : "index_sp";
    res.render(template);
});
app.get("/staff", (req, res) => {
    res.render("staff");
});
app.get("/fee", (req, res) => {
    res.render("fee");
});
app.get("/product", (req, res) => {
    var userAgent = req.headers['user-agent'];
    const iswide = regex.test(userAgent);
    const template = iswide ? "product_pc" : "product_sp";
    res.render(template);
});
app.get("/access", (req, res) => {
    res.render("access");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
