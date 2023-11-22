import { Box, Paper } from "@mui/material";

interface Props {
  fullName: string;
  categoryFullName: string;
  awardYear: string;
  dateAwarded: string;
  prize: string;
  motivation: string;
}

export const LaureateBoxContent = (props: Props) => {
  return (
    <Paper elevation={3} sx={{ padding: "5px", width: "96%" }}>
      <Box>
        <h3>{props.fullName}</h3>
      </Box>
      <Box>
        <i>"{props.motivation}"</i>
      </Box>
      <Box>{props.categoryFullName}</Box>
      <Box>Year award: {props.awardYear}</Box>
      <Box>Exact date: {props.dateAwarded}</Box>
      <Box>Prize: {props.prize}</Box>
    </Paper>
  );
};
