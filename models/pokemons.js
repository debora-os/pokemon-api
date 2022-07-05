const mongoose = require("mongoose");
const {Schema} = mongoose;

const pokemonSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, required: true},
    numeroPokedex: {type: Number, required: true},
    nome: {type: String, required: true},
    elemento: {type: String, required: true},
    vida: {type: Number, required: true},
    dano: {type: Number, required: true},
    defesa: {type: Number, required: true},
    habilidades: {type: String, required: true},
    fraqueza: {type: String, required: true},
    imagem: {type: String, required: true}
})

const Pokemon = mongoose.model("pokemons", pokemonSchema);

module.exports = Pokemon;