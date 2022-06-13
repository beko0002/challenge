document.querySelector("#search").addEventListener("click", getPokemon);

function getPokemon(e) {
    const name = document.querySelector("#pokemonname").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response)=> response.json())
    .then((data)=> {
        document.querySelector(".pokemonbox").innerHTML = `
        <div>
        <img 
            src="${data.sprites.other["official-artwork"].front_default}" 
            alt="${data.name}"
        />
    </div>
    <div class="pokemoninfo">
        <h1>${data.name}</h1>
        <p>height: ${data.height}</p>
        <p>weight: ${data.weight} kg</p>
    </div>
        `;
    })
    .catch((err) => {
        console.log(err);
    });
     
    e.preventDefault();
}

  