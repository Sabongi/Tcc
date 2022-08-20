const { json } = require("express");
const db = require('../database/connection');

module.exports = {
    async listarCaterorias(request, response){
        try{
            const sql = "SELECT catID, catNome, catIcone FROM categorias;";
            const categorias = await db.query(sql);

            return response.status(200).json({confirma: 'sucesso', nResults: categorias[0].length ,message: categorias[0]});
        } catch(error) {
            return responde.status(500).json({confirma: 'Erro', message: error})
        }
    },
}