const express = require("express");
const router = require("./route/post.js")
const app = express();

app.use(router);

app.listen(4000, () => {
    console.log("Server Started")
})