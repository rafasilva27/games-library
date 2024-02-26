import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState(
    JSON.parse(localStorage.getItem("games-lib")) || []
  ); //exibe os jogos do localStorage ou um array vazio

  const addGames = ({ title, cover }) => {
    const newGames = [...games, { title, cover }]; // copia a lista de games e adiciona o novo jogo
    setGames(newGames);
    localStorage.setItem("games-lib", JSON.stringify(newGames));
  };

  const removeGame = (title) => {
    const newGames = games.filter((game) => game.title !== title); // filtra todos os jogos cujos títulos são diferentes do title fornecido como parâmetro e retorna uma nova lista de jogos
    setGames(newGames);
    localStorage.setItem("games-lib", JSON.stringify(newGames));
  };

  return { games, addGames, removeGame };
}
