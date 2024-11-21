const express = require("express");
const router = express.Router();

// Importo il controller intero
const postsController = require("../controllers/postsController");

// Imposto le rotte usando le funzioni del controller
router.get("/posts", postsController.getAllPosts);
router.get("/posts/:title", postsController.getPostByTitle);
router.delete("/posts/:title", postsController.deletePost);

module.exports = router;
