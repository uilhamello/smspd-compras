var fs = require("fs");
// Banco de dados em memória (vai sumir ao reiniciar o servidor)
const produtos = [];

module.exports = {
  listar: (req, res) => {
    fs.readFile("./models/produtos.json" , "utf8", function(err, data){
        if(err){
            return console.log("Erro ao ler arquivo");
        }        
        res.json(JSON.parse(data)); // faz o parse para json
    });
  },

  criar: (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = produtos.length + 1;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
  },

  buscarPorId: (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  },

  atualizar: (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    Object.assign(produto, req.body);
    res.json(produto);
  },

  deletar: (req, res) => {
    const index = produtos.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ error: "Produto não encontrado" });
    produtos.splice(index, 1);
    res.status(204).send();
  }
};
