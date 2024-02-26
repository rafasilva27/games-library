import { Button, Grid, Typography } from "@mui/material";

export default function Game({ title, cover, onRemove }) {
  return (
    <Grid item md={2} container>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        <Typography variant="h5" color={"#fff"} textTransform={"uppercase"}>
          {title}
        </Typography>

        <img src={cover} />

        <Button variant="outlined" size="small" onClick={onRemove}>
          Remover
        </Button>
      </Grid>
    </Grid>
  );
}
