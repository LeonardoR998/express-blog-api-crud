// app.js

const express = require("express");
const app = express();

// Imposto la porta
const port = 3000;

app.use(express.json());

// Importo le rotte
const postsRouter = require("./routers/posts");

// Imposto il routing con il router delle rotte dei post
app.use("/", postsRouter);

// Avvio il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
