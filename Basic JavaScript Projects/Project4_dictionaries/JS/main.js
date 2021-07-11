function pokedex() { // This creates a dictionary called pokedex
    var pokemon = { 
        Pikachu:"Electric", //All the KVPs in the dictionary
        Squirtle:"Water",
        Charizard:"Fire",
        Caterpie:"Bug",
        Ekans:"Poison",
        Psyduck:"Water",
    };
    delete pokemon.Ekans; // This deletes "Ekans" from the dictionary
    document.getElementById("Dictionary").innerHTML = pokemon.Ekans;
}