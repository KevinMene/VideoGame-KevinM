require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Videogame, Genre } = require('../db');

//Se muestra Todo -----> GET a '/videogame/:idVideoGame' <-------
router.get('/:idVideogame', async (req, res) => {
  const { idVideogame } = req.params

  //verifico si es un juego creado y me trae el detalle de la DB
  if (idVideogame.includes('-')) {
    let videogameDb = await Videogame.findOne({
      where: {
        id: idVideogame,
      },
      include: Genre
    })
    //Parseo el objeto
    videogameDb = JSON.stringify(videogameDb);
    videogameDb = JSON.parse(videogameDb);

    //dejo un array con los nombres de genero solamente
    videogameDb.genres = videogameDb.genres.map(g => g.name);
    res.json(videogameDb)
  } else {
    //else (si no es un juego creado, voy a buscar la info a la API)
    try {
      const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
      let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
      genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
      platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
      return res.json({
        id,
        name,
        background_image,
        genres,
        description,
        releaseDate,
        rating,
        platforms
      })
    } catch (err) {
      return console.log(err)
    }
  }
});

//S Todo -----> POST /videogame <-----
router.post('/', async (req, res) => {
  let { name, description, releaseDate, rating, genres, platforms } = req.body;
  platforms = platforms.join(', ');
  try {
    const gameCreated = await Videogame.findOrCreate({ //Devuelvo un array
      where: {
        name, description, releaseDate, rating, platforms
      }
    })
    await gameCreated[0].setGenres(genres); // relaciono ID genres al juego creado
  } catch (err) {
    console.log(err)
  }
  res.send('create succesfully, Saludos desde el Backend')
})

module.exports = router;