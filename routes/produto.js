const express = require("express");
const router = express.Router();
const ProdutosController = require("../controllers/ProdutoController");

// Rotas CRUD
router.get("/produto/", ProdutosController.listar);
router.post("/produto/add/", ProdutosController.criar);
router.get("/produto/search/:id", ProdutosController.buscarPorId);
router.put("/produto/edit/:id", ProdutosController.atualizar);
router.delete("/produto/remove/:id", ProdutosController.deletar);

module.exports = router;
