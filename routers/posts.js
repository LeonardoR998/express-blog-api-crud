// Importo il modulo 'express' per creare un'applicazione web
const express = require("express");

// Crea un oggetto router per gestire le rotte in modo separato
const router = express.Router();

// Importo il controller che contiene le funzioni per gestire i post
const postsController = require("../controllers/postsController");

// ! Imposto le rotte per gestire le richieste HTTP

// Rotta per ottenere tutti i post.
router.get("/posts", postsController.getAllPosts);

// Rotta per ottenere un singolo post tramite il suo ID.
router.get("/posts/:id", postsController.getPostById);

// Rotta per eliminare un post tramite l'ID.
router.delete("/posts/:id", postsController.deletePost);

// Esporto il router in modo che possa essere utilizzato in altre parti dell'applicazione
module.exports = router;
