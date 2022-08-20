const express = require("express");

const db = require('../database/connection');
const router = express.Router();

const categoriasController = require('../controllers/categoriasController');

router.get('/categorias', categoriasController.listarCaterorias);

module.exports = router;