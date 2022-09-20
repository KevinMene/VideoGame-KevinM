require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Genre } = require('../db');

//Se muestra Todos ----->  GET a '/genres' <------
router.get('/', async (req, res) => {
  try {
    //Si los tengo en la DB los traigo desde Alli.
    const gneresDB = await Genre.findAll();
    if (gneresDB.length) return res.json(gneresDB)

    //else Los busco  en la APi
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = response.data.results;// recibo un array de objetos con los juegos filtrados por GENERO
    //los guardo en la DB filtrando solo el nombre
    genres.forEach(async g => {
      await Genre.findOrCreate({
        where: {
          name: g.name
        }
      })
    });
    //Solo se envia al frontend la informacion necesaria
    const genreslistos = genres.map(game => {
      return {
        id: game.id,
        name: game.name
      }
    });
    res.json(genreslistos)
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;