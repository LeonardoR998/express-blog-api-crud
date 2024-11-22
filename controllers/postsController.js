// Importo l'array dei post dalla cartella data
const posts = require("../data/postsData");

// Funzione per ottenere tutti i post
const getAllPosts = (req, res) => {
  res.json(posts);
};

// Funzione per ottenere un singolo post tramite ID
const getPostById = (req, res) => {
  // Trovo il post che corrisponde all'ID
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  // Se il post non viene trovato, restituisco un errore 404
  if (!post) {
    return res.status(404).send("Post non trovato");
  }

  // Se il post viene trovato, invio il post come risposta in formato JSON
  res.json(post);
};

// Funzione per eliminare un post tramite ID
const deletePost = (req, res) => {
  // Trovo l'indice del post che corrisponde all'ID
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));

  // Se il post non viene trovato, restituisco un errore 404
  if (index === -1) {
    return res.status(404).send("Post non trovato");
  }

  // Rimuovo il post dalla lista dei post
  posts.splice(index, 1);

  console.log("Lista aggiornata dei post:", posts);

  // Rispondo con un codice di stato 204 (No Content), indicando che il post è stato eliminato
  res.status(204).send();
};

// Esporto le funzioni
module.exports = {
  getAllPosts,
  getPostById,
  deletePost,
};
