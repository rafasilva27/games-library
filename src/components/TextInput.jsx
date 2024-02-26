import { Box } from "@mui/material";

export default function TextInput({ id, label, value, onChange }) {
  return (
    <Box>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </Box>
  );
}
