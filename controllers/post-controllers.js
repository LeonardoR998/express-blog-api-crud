// Array dei post
let posts = [
  {
    title: "Ciambellone",
    content: "Ciambellone ripieno.",
    image: "/images/ciambellone.jpeg",
    tags: ["soffice", "ripieno"],
  },
  {
    title: "Cracker Barbabietola",
    content: "Cracker alla barbabietola.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["viola", "croccante"],
  },
  {
    title: "Pane Fritto",
    content: "Pane fritto e dolce.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["fritto", "dolce"],
  },
  {
    title: "Pasta Barbabietola",
    content: "Pasta alla barbabietola.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"],
  },
  {
    title: "Torta Paesana",
    content: "Torta di latte.",
    image: "/images/torta_paesana.jpeg",
    tags: ["latte", "torta"],
  },
];

// INDEX - Mostra tutti i post
const getAllPosts = (req, res) => {
  res.send("Lista di tutti i post");
};

// SHOW - Mostra un post specifico
const getPostByTitle = (req, res) => {
  res.send("Dettagli del post: " + req.params.title);
};

// CREATE - Crea un nuovo post
const createPost = (req, res) => {
  res.send("Creazione nuovo post");
};

// UPDATE - Modifica integrale di un post
const updatePost = (req, res) => {
  res.send("Modifica integrale del post: " + req.params.title);
};

// DELETE - Elimina un post
const deletePost = (req, res) => {
  res.send("Eliminazione del post: " + req.params.title);
};

module.exports = {
  getAllPosts,
  getPostByTitle,
  createPost,
  updatePost,
  deletePost,
};
