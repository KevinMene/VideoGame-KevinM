require('dotenv').config();
const { Router } = require('express');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')
const axios = require('axios');


const router = Router();
//Funcion => Mostrar todos los videosGames

router.get('/', async (req, res) => {
  const { name } = req.query;
  //Busca el juego en la base de datos
  try {
    if (name) {
      const thegameDB = await Videogame.findOne({
        where: { name: name },
        include: [Genre]
      });
      if (thegameDB) {
        const t = thegameDB
        thegameDB = {
          id: t.id,
          name: t.name,
          Image: t.image,
          rating: t.rating,
          source: 'Created',
          genre: t.genre.map(e => e.name).join(', '),
        }
        //Busca el juego en la api
        const thegameAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        thegameAPI = thegameAPI.data.results.map((e) => {
          const juego = {
            id: j.id,
            name: j.name,
            rating: j.rating,
            source: 'API',
            image: j.background_image,
            genre: j.genre && e.genre.map((e) => e.name).filter(e => e != null).join(', '),
          };
          return juego;
        })
        res.json(thegameAPI.concat(thegameDB));
      } else {
        const thegameAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        thegameAPI = thegameAPI.data.results.map((e) => {
          const juego = {
            id: j.id,
            name: j.name,
            rating: j.rating,
            source: 'API',
            image: j.background_image,
            genre: j.genre && e.genre.map((e) => e.name).filter(e => e != null).join(', '),
          };
          return juego;
        })
        res.json(thegameAPI);
      }
    } else {
      //Se traen todos los video juegos
      const ResultsAllgames = [];
      const rangoApiGame = `https://api.rawg.io/api/games?key=${API_KEY}`;
      for (let i = 0; i < 5; i++) {
        const juegos = (await axios.get(rangoApiGame)).data;
        const infogame = juegos.results.map((i) => {
          const info = {
            id: i.id,
            name: i.name,
            image: i.background_image,
            genre: i.genre.map((g) => g.name).filter(e => e != null).join(', '),
            source: 'API',
            rating: i.rating,
          };
          return info;
        })
        rangoApiGame = juegos.next;
        ResultsAllgames = ResultsAllgames.concat(infogame);
      }
      const juegosDB = await Videogame.findAll({ include: [Genre] });
      const jsongame = juegosDB.map((j) => j.toJSON());
      jsongame.forEach(e => {
        e.source = 'Created',
          e.genre = e.genre.map((g) => g.name).filter(e => e != null).join(', ');
      });
      ResultsAllgames = ResultsAllgames.concat(jsongame);
      res.json(ResultsAllgames)
    }
  } catch (err) {
    res.status(404).json({ err });
  }
})


module.exports = router;
