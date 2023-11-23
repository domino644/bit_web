import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import ApiData from "../interfaces/ApiData";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../hooks/useDataContext";

const Main = () => {
  function onlyUnique(value: string, index: number, array?: string[]) {
    return array?.indexOf(value) === index;
  }
  const navigate = useNavigate();
  const [chosenYear, setChosenYear] = useState<string>("");
  const [years, setYears] = useState<string[] | undefined>([""]);
  const [selectDisabled, setSelectDisabled] = useState<boolean>(true);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const data: ApiData = useDataContext();

  const handleChange = (event: SelectChangeEvent) => {
    setChosenYear(event.target.value);
    if (buttonDisabled) setButtonDisabled(false);
  };

  const handleClick = () => {
    navigate(`/prizes/en/${chosenYear}`);
  };

  useEffect(() => {
    setYears(data.nobelPrizes?.map((el) => el.awardYear).filter(onlyUnique));
    setSelectDisabled(false);
  });
  const yearComponents = years?.map((year) => {
    return (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    );
  });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FormControl
        required
        disabled={selectDisabled}
        sx={{
          width: "20%",
          minWidth: "100px",
        }}
      >
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-simple-select"
          label="Year"
          value={chosenYear}
          onChange={handleChange}
        >
          <MenuItem key="all" value="all">
            All years
          </MenuItem>
          {yearComponents}
        </Select>
      </FormControl>
      <Button disabled={buttonDisabled} onClick={handleClick}>
        Search for prizes!
      </Button>
    </Box>
  );
};

export default Main;
