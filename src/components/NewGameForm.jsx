import { Box, Button } from "@mui/material";
import { useState } from "react";
import TextInput from "./TextInput";

export default function NewGameForm({ addGames }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (event) => {
    // para não ficar atualizando a página quando clicar no botão
    event.preventDefault();
    addGames({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <Box display={"flex"} gap={"2rem"}>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="title"
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
          id="cover"
          label="Capa"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </form>
      <Box sx={{ display: "flex", alignItems: "center", padding: "2rem 0 0" }}>
        <Button
          sx={{
            padding: "0.5rem 1rem",
            "&.Mui-disabled": {
              backgroundColor: "#4a4a4a",
              opacity: 0.5,
              color: "#fff",
            },
          }}
          variant="contained"
          size="small"
          type="submit"
          onClick={handleSubmit}
          disabled={!title || !cover} // desabilita o botão se qualquer um dos inputs estiver vazio
        >
          Adicionar à biblioteca
        </Button>
      </Box>
    </Box>
  );
}
