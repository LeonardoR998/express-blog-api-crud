const express = require("express");
const app = express();
const port = 3000;

// Asset statico
app.use("/images", express.static("public/images"));

const postsRouter = require("./routers/posts");

app.use("/", postsRouter);

app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
