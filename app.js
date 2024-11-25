const express = require("express");
const app = express();

// Importo il router delle rotte dei post
const postsRouter = require("./routers/posts");

// Utilizzo il middleware
app.use(express.json());

// Imposto il routing con il router dei post
app.use("/", postsRouter);

// Imposto la porta
const port = 3000;

// Avvio il server sulla porta specificata
app.listen(port, () => {
  console.log(`Server in esecuzione sulla porta ${port}`);
});
