require('dotenv').config();
const { Router } = require('express');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')
const axios = require('axios');


const router = Router();

//Obtenemos el VideoGame por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  //Se trae de la DB
  try {
    if (id.includes('-')) {
      const DBgame = await Videogame.findOne({
        where: { id },
        include: {
          model: Genre,
          attributes: ['name'],
          through: { attributes: [] }
        }
      });
      const g = DBgame;
      const infogame = {
        id: g.id,
        name: g.name,
        image: g.image,
        rating: g.rating,
        description: g.description,
        released: g.released,
        platforms: g.platforms,
        createdAt: g.createdAt,
        updateAt: g.updateAt,
        genre: g.genre.map(e => e.name).join(', ')
      }
      return res.json(infogame);
    } else {
      // se trae desde la api
      const Apigame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      const a = Apigame.data;
      const infogame = {
        name: a.name,
        image: a.background_image,
        genre: a.genre && a.genre.map((e) => e.name).filter(e => e != null).join(', '),
        description: a.description,
        released: a.released,
        rating: a.rating,
        platforms: a.platforms && a.platforms.map((e) => e.platforms.name).filter(e => e != null).join(', ')
      }
      return res.json(infogame);
    }
  } catch (err) {
    res.status(404).json({ err });
  }
})


module.exports = router;