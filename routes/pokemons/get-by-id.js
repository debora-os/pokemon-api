const express = require("express");
const yup = require("yup");

const Pokemon = require("../../models/pokemons");

const authRequest = require("../../middlewares/auth-request");

const route = express.Router();

route.get("/pokemons/:id", [authRequest], async (req, res) => {
  try {
    const pokemons = await Pokemon.findById(req.params.id);
    res.status(200).send(pokemons);
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = route;