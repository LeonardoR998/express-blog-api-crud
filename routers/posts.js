const express = require("express");
const router = express.Router();

// Importiamo il controller dei post
const postsController = require("../controllers/postsController");

// INDEX - Mostra tutti i post
router.get("/posts", postsController.getAllPosts);

// SHOW - Mostra un post specifico
router.get("/posts/:title", postsController.getPostByTitle);

// CREATE - Crea un nuovo post
router.post("/posts", postsController.createPost);

// UPDATE - Modifica integrale di un post
router.put("/posts/:title", postsController.updatePost);

// DELETE - Elimina un post
router.delete("/posts/:title", postsController.deletePost);

module.exports = router;
