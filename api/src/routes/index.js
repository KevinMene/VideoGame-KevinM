const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideoGames = require('./getVideoGames');
const getIdVideoGame = require('./getIdVideoGame');
const getGenres = require ('./getGenres');
const CreateVideoGame = require('./CreateVideoGame');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Muestra todos los Videogames // Busca el Videogame escrito
router.use('/videogames',getVideoGames);
//Muestra por Id
router.use('/videogame',getIdVideoGame);
//Busca todos los genres
router.use('/genres',getGenres);
//Crea un videoGame
router.use('/videogame', CreateVideoGame)



module.exports = router;
