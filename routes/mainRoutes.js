const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get("/",mainController.index);

router.get("/carrito",mainController.carrito);

router.get("/login",mainController.login);

router.get("/registro",mainController.registro);

router.get("/productos",mainController.productos);

router.get("/altaproducto",mainController.altaproducto);

router.get("/editarproducto",mainController.editarproducto);

module.exports = router;

