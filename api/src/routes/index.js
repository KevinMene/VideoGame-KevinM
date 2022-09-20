const { Router } = require('express');
// Importo todos los routers;
const genres = require('./genres');
const videogame = require('./videogame');
const videogames = require('./videogames');

const router = Router();

// Configurar los routers
router.use('/videogames',videogames);
router.use('/videogame',videogame);
router.use('/genres',genres);



module.exports = router;
