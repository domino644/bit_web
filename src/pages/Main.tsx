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
import api_data from "../interfaces/api_data";
import prize from "../interfaces/prize";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";

function Main() {
  function onlyUnique(value: string, index: number, array?: string[]) {
    return array?.indexOf(value) === index;
  }
  const navigate = useNavigate();
  const [data, setData] = useState<api_data>({});
  const [chosenYear, setChosenYear] = useState<string>("");
  const [years, setYears] = useState<string[] | undefined>([""]);
  const [selectDisabled, setSelectDisabled] = useState<boolean>(true);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const handleChange = (event: SelectChangeEvent) => {
    setChosenYear(event.target.value);
    if (buttonDisabled) setButtonDisabled(false);
  };

  const handleClick = () => {
    navigate(`/prizes/:${chosenYear}`);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((res_data) => {
        setData(res_data);
        setYears(
          data.nobelPrizes
            ?.map((obj: prize) => obj.awardYear)
            .filter(onlyUnique)
        );
      })
      .finally(() => {
        setSelectDisabled(false);
      });
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
          {yearComponents}
        </Select>
      </FormControl>
      <Button disabled={buttonDisabled} onClick={handleClick}>
        Wyszukaj nagrody!
      </Button>
    </Box>
  );
}

export default Main;
