import { Paper, Select, MenuItem, Box, Button } from "@mui/material";
import { useState } from "react";
import FilterParams from "../interfaces/FilterParams";

interface Props {
  filterFn: (filters: FilterParams) => void;
}

export const FilterBar = (props: Props) => {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  return (
    <Paper
      elevation={2}
      sx={{ width: "96%", padding: "5px", display: "flex", gap: "20px" }}
    >
      <Box sx={{ minWidth: "12%" }}>
        <Box>Category </Box>
        <Select
          defaultValue="all"
          sx={{ width: "100%" }}
          onChange={(event) => setCategoryFilter(event.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Physics">Physics</MenuItem>
          <MenuItem value="Peace">Peace</MenuItem>
          <MenuItem value="Chemistry">Chemistry</MenuItem>
          <MenuItem value="Physiology or Medicine">
            Physiology or Medicine
          </MenuItem>
          <MenuItem value="Literature">Literature</MenuItem>
        </Select>
      </Box>
      <Button
        onClick={() =>
          props.filterFn({
            categoryFilter: categoryFilter,
          })
        }
        sx={{ marginLeft: "auto" }}
      >
        Filter
      </Button>
    </Paper>
  );
};
