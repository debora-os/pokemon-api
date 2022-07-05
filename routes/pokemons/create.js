const express = require("express");
const yup = require("yup");

const Pokemon = require("../../models/pokemons");

const authRequest = require("../../middlewares/auth-request");
const validateRequest = require("../../middlewares/validate-request");

const schema = {
  numeroPokedex: yup.number().required(),
  nome: yup.string().required(),
  elemento: yup.string().required(),
  vida: yup.number().required(),
  dano: yup.number().required(),
  defesa: yup.number().required(),
  habilidades: yup.string().required(),
  fraqueza: yup.string().required(),
  imagem: yup.string().required(),
};

const route = express.Router();

route.post(
  "/pokemons",
  [authRequest, validateRequest(schema)],
  async (req, res) => {
    try {
      const newPokemon = await Pokemon.create({
        userId: req.user.id,
        numeroPokedex: req.body.numeroPokedex,
        nome: req.body.nome,
        elemento: req.body.elemento,
        vida: req.body.vida,
        dano: req.body.dano,
        defesa: req.body.defesa,
        habilidades: req.body.habilidades,
        fraqueza: req.body.fraqueza,
        imagem: req.body.imagem,
      });
      res.status(200).send(newPokemon);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
);

module.exports = route;
