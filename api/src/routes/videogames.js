require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { Videogame, Genre } = require('../db');

//s Todo ----> GET a '/Videogames' <----
router.get('/', async (req, res) => {
  // Busco en la DB  si hay juegos creados y me los trago todos
  let videogamesDB = await Videogame.findAll({
    include: Genre
  });
  // Parseo el Objeto
  videogamesDB = JSON.stringify(videogamesDB);
  videogamesDB = JSON.parse(videogamesDB);
  //(aca llega array de objetos) Dejo el arreglo de generos plano con solo los nombres de cada genero.
  videogamesDB = videogamesDB.reduce((acc, el) => acc.concat({
    ...el,
    genres: el.genres.map(g => g.name)
  }), [])

  //s Todo querys ----> GET a '/Videogames?name=' <----
  // si llegan querys 'name' las agarro aca
  if (req.query.name) {
    try {
      //busco si existe el juego en la API
      let response = await axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`);
      if (!response.data.count) return res.status(204).json(`Juego no Encontrado"${req.query.name}"`);
      //filtro solo la data que necesito para enviarla al frontend
      const gameslisto = response.data.results.map(game => {
        return {
          id: game.id,
          name: game.name,
          background_image: game.background_image,
          rating: game.rating,
          genres: game.genres.map(g => g.name)
        }
      });
      //como antes me traje todos de la DB, si entro por query solo filtro los que considan con la busqueda
      const filteredgameDB = videogamesDB.filter(g => g.name.toLowerCase().includes(req.query.name.toLocaleLowerCase()));
      //le doy prioridad a la DB y sumo todos y corto el array en 15
      const results = [...filteredgameDB, ...gameslisto.splice(0, 15)];
      return res.json(results)
    } catch (err) {
      console.log(err);
    }
  } else {
    //si no, voy a buscar todos los juegos a la API
    try {
      let pages = 0;
      let results = [...videogamesDB];//sumo lo que tengo en la DB
      let response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
      while (pages < 6) {
        pages++;
        //filtro solo la data que necesito enviar al frontend
        const gamesReady = response.data.results.map(game => {
          return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            rating: game.rating,
            genres: game.genres.map(g => g.name)
          }
        });
        results = [...results, ...gamesReady]
        response = await axios.get(response.data.next) // vuelvo a llamar a la API con next
      }
      return res.json(results);
    } catch (err) {
      console.log(err)
      return res.sendStatus(500);
    }
  }
})

module.exports = router;