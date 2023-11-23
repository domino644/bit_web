import { Box, Paper } from "@mui/material";
import { filterEntities, filterHTML } from "../util/HTMLStringFilter";
import nobelLogo from "../static/png/nobel.png";

interface Props {
  fullName: string;
  categoryFullName: string;
  awardYear: string;
  dateAwarded: string;
  prizeSK: string;
  prizeUSD: string;
  motivation: string;
}

export const LaureateBoxContent = (props: Props) => {
  return (
    <Paper elevation={7} sx={{ padding: "5px", width: "96%" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <img src={nobelLogo} alt="nobel prize medal" width={40} height={40} />
        <h3>{props.fullName}</h3>
      </Box>
      <Box>
        <h5>
          <i>"{filterHTML(filterEntities(props.motivation))}"</i>
        </h5>
      </Box>
      <Box>{props.categoryFullName}</Box>
      <Box>Year award: {props.awardYear}</Box>
      <Box>Exact date: {props.dateAwarded}</Box>
      <Box>
        <Box>
          Prize: {props.prizeSK}SEK/{props.prizeUSD}USD
        </Box>
      </Box>
    </Paper>
  );
};
