const express = require('express');

const videojuegosControllers = require('../Controllers/videojuegos-controllers');

const router = express.Router();

router.get('/', videojuegosControllers.getAllVideojuegosRetro);

router.get('/:pid', videojuegosControllers.getVideojuegosRetroById);

router.get('/creator/:uid', videojuegosControllers.getVideojuegosRetroByUsers);

router.post('/', videojuegosControllers.saveVideojuegoRetro);

router.patch('/:pid',videojuegosControllers.updateVideojuegoRetro);

router.delete('/:pid',videojuegosControllers.deleteVideojuegoRetro);

module.exports = router;