const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    console.log("hello world.")
    res.send("hello world.")
});

app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動しました`)
});