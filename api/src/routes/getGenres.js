require('dotenv').config();
const { Router } = require('express');
const { API_KEY } = process.env;
const {  Genre } = require('../db.js')
const axios = require('axios');

const router = Router();

//Obtengo los genre desde la api y los gurado en la api

router.get('/', async (req, res) => {
  try {
    const genApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    genApi.data.results.forEach(e => {
      Genre.findOrCreate({
        where: {
          name: e.name
        }
      })
    });
    const genDB = await Genre.findAll()
    res.json(genDB)
  } catch (err) {
    res.status(404).json({ err });
  }
})


module.exports = router;