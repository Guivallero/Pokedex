const pokemonModel = require('../models/pokemonModel');

const getAllPokemons = (req,res) => {
    const pokemons = pokemonModel.getAllPokemon();
    res.render('index', {pokemons});
};
const getPokemon = (req,res) => {
    const pokemon = pokemonModel.getPokemonByid(req.params.id);
    if (pokemon){
        res.render('pokemon', {pokemon});
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};
