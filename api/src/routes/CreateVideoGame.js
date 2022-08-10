require('dotenv').config();
const { Router } = require('express');
const { Videogame, Genre } = require('../db.js')

const router = Router();

router.post('/', async (req, res) => {
  const { name, description, image, released, rating, platforms, genre } = req.body;
  const platformsStrings = platforms.join(', ');
  const crear = await Videogame.create({
    name,description,image,released,rating,platforms: platformsStrings
  });
  genre.forEach(async(e) => {
    const juegogenre = await Genre.findOne({
      where:{
        name: e
      }
    })
    await crear.addGenre(juegogenre);
  })
  res.send('Video Game created 🏍️');
})


module.exports = router;