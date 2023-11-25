import { Paper, Select, MenuItem, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Slider from "@mui/material/Slider";
import "dayjs/locale/pl";
import { useState } from "react";

export const FilterBar = () => {
  const [money, setMoney] = useState<number[]>([10, 30]);
  const valuetext = (value: number) => `${value}SEK`;
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setMoney(newValue as number[]);
  };
  return (
    <Paper
      elevation={2}
      sx={{ width: "96%", padding: "5px", display: "flex", gap: "15px" }}
    >
      <Box sx={{ minWidth: "12%" }}>
        <Box>Category </Box>
        <Select defaultValue="none" sx={{ width: "100%" }}>
          <MenuItem value="none">---</MenuItem>
          <MenuItem value="physics">Physics</MenuItem>
          <MenuItem value="peace">Peace</MenuItem>
          <MenuItem value="chemistry">Chemistry</MenuItem>
          <MenuItem value="medicine">Medicine or Physiology</MenuItem>
          <MenuItem value="literature">Literature</MenuItem>
        </Select>
      </Box>
      <Box>
        <Box>Date </Box>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
          <DateField />
        </LocalizationProvider>
      </Box>
      <Box sx={{ width: "300px" }}>
        <Slider
          getAriaLabel={() => "Price range"}
          getAriaValueText={valuetext}
          value={money}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          disableSwap
        />
      </Box>
    </Paper>
  );
};
