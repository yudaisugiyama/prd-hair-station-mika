const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`)
});

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/staff", (req, res) => {
    res.render("staff", {text: "実装中です。暫くお待ち下さい。"});
});
app.get("/fee", (req, res) => {
    res.render("fee", {text: "実装中です。暫くお待ち下さい。"});
});
app.get("/product", (req, res) => {
    res.render("product", {text: "実装中です。暫くお待ち下さい。"});
});
app.get("/access", (req, res) => {
    res.render("access", {text: "実装中です。暫くお待ち下さい。"});
});
app.get("/contact", (req, res) => {
    res.render("contact", {text: "実装中です。暫くお待ち下さい。"});
});
