const express = require("express");
const mongoose = require("mongoose");

const signup = require("./routes/users/signup");
const signin = require("./routes/users/signin");

const create = require("./routes/pokemons/create");
const deletePokemon = require("./routes/pokemons/delete");
const updatePokemon = require("./routes/pokemons/update");
const getAll = require("./routes/pokemons/get-all");
const getById = require("./routes/pokemons/get-by-id");

mongoose.connect("mongodb://localhost:27017/pokemons");

const server = express();
server.use(express.json());

server.use(signup);
server.use(signin);

server.use(create);
server.use(deletePokemon);
server.use(updatePokemon);
server.use(getAll);
server.use(getById);

server.listen(3000, () => {
    console.log("LISTEN IN 3000 PORT!!")
});