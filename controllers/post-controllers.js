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
