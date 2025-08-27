const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");

// Rotas CRUD
router.get("/produto/", produtoController.listar);
router.post("/produto/add/", produtoController.criar);
router.get("/produto/search/:id", produtoController.buscarPorId);
router.put("/produto/edit/:id", produtoController.atualizar);
router.delete("/produto/remove/:id", produtoController.deletar);

module.exports = router;
