const input = document.getElementById("pokemonInput");
const findBtn = document.getElementById("findBtn");
const addBtn = document.getElementById("addBtn");

const img = document.getElementById("pokemonImg");
const audio = document.getElementById("pokemonAudio");

const moveDropdowns = document.querySelectorAll(".move");
const teamArea = document.getElementById("teamArea");

const PLACEHOLDER_IMG = "img/MissingNo.png";

//  CACHE

const cache = {}; // stores API responses

let currentPokemon = null;

// FETCH POKEMON

findBtn.addEventListener("click", async () => {

    const name = input.value.toLowerCase().trim();

    if (!name) {
        resetDisplay();
        return;
    }

    try {
        let data;

        if (cache[name]) {
            data = cache[name];
        } else {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );

            if (!response.ok) throw new Error("Pokemon not found");

            data = await response.json();
            cache[name] = data;
        }

        loadPokemon(data);

    } catch (error) {
        alert("Pokemon not found!");
        resetDisplay();
    }
});


// load data to page

function loadPokemon(data) {

    currentPokemon = data;

    // image
    img.src = data.sprites.front_default;
    img.classList.remove("missingno");

    // pkmn cry audio
    audio.src = data.cries?.latest || "";

    // load moves
    const moves = data.moves.map(m => m.move.name);

    moveDropdowns.forEach(select => {
        select.innerHTML = "";

        const moves = data.moves.map(m => m.move.name);

        moveDropdowns.forEach(select => {
            select.innerHTML = "";

            moves.forEach(move => {
                const option = document.createElement("option");
                option.value = move;
                option.textContent = move;
                select.appendChild(option);
            });
        });
    });
}


// adds to team

addBtn.addEventListener("click", () => {

    if (!currentPokemon) return;

    const chosenMoves = [];

    moveDropdowns.forEach(select => {
        chosenMoves.push(select.value);
    });

    const card = document.createElement("div");
    card.className = "teamCard";

    const moveList = chosenMoves
        .map(m => `<li>${m}</li>`)
        .join("");

    card.innerHTML = `
        <img src="${currentPokemon.sprites.front_default}">
        <ul>${moveList}</ul>
    `;

    teamArea.appendChild(card);
});

function resetDisplay() {

    moveDropdowns.forEach(select => {
        select.innerHTML = "";
    });

    currentPokemon = null;
}