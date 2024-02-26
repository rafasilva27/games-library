import { Box, Typography } from "@mui/material";
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";
import "./index.css";

function App() {
  const { games, addGames, removeGame } = useGameCollection(); // extraindo da função useGameCollection o array de games, e as funções addGames e removeGame

  return (
    <Box>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: "#1976d2",
            margin: "1rem 0",
            fontWeight: "bold",
            paddingBottom: "1rem",
          }}
        >
          Biblioteca de jogos
        </Typography>
      </Box>

      <NewGameForm addGames={addGames} />

      <Box display={"flex"} gap={"1rem"} paddingTop={"2rem"} flexWrap={"wrap"}>
        {games.length > 0 ? ( // se o tamanho do array de games for maior que 0, exibe os jogos
          games.map((game) => (
            <Game
              key={game.title}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.title)}
            />
          ))
        ) : (
          <Typography variant="subtitle" sx={{ color: "#bebebe" }}>
            Nenhum jogo encontrado
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
