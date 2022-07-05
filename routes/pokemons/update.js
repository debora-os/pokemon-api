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

route.put(
  "/pokemons/:id",
  [authRequest, validateRequest(schema)],
  async (req, res) => {
    try {
      await Pokemon.findByIdAndUpdate(req.params.id, {
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
      const pokemon = await Pokemon.findById(req.params.id);
      res.status(200).send(pokemon);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
);

module.exports = route;
