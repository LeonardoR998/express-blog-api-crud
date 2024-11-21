// Importo l'array dei post dalla cartella data
const posts = require("../data/postsData");

// Funzione per ottenere tutti i post
const getAllPosts = (req, res) => {
  // Invia la lista di tutti i post come risposta in formato JSON
  res.json(posts);
};

// Funzione ottenere un singolo post
const getPostByTitle = (req, res) => {
  // Troviamo il post che corrisponde al titolo specificato nell'URL
  const post = posts.find((p) => p.title === req.params.title);

  // Se il post non viene trovato, restituisco un errore 404
  if (!post) {
    return res.status(404).send("Post non trovato");
  }

  // Se il post viene trovato, invio il post come risposta in formato JSON
  res.json(post);
};

// Funzione per eliminare un post
const deletePost = (req, res) => {
  // Trovol'indice del post
  const index = posts.findIndex((p) => p.title === req.params.title);

  // Se il post non viene trovato, restituisco un errore 404
  if (index === -1) {
    return res.status(404).send("Post non trovato");
  }

  // Rimuovo il post dalla lista dei post
  posts.splice(index, 1);

  // Stampo nel terminale la lista aggiornata dei post
  console.log("Lista aggiornata dei post:", posts);

  // Rispondo con un codice di stato 204 (No Content), indicando che il post è stato eliminato
  res.status(204).send();
};

// Esporto le funzioni
module.exports = {
  getAllPosts,
  getPostByTitle,
  deletePost,
};
