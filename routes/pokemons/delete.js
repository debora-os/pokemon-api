const express = require("express");
const yup = require("yup");

const Pokemon = require("../../models/pokemons");

const authRequest = require("../../middlewares/auth-request");

const route = express.Router();

route.delete("/pokemons/:id", [authRequest], async (req, res) => {
  try {
    const newPokemon = await Pokemon.findByIdAndRemove(req.params.id);
    res.status(201).send({ message: "SUCCESS" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
});

module.exports = route;
