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
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";

interface api_data {
  nobelPrizes?: [nobel_info];
}
interface nobel_info {
  awardYear: string;
  category: Object;
}

function Main() {
  function onlyUnique(value: string, index: number, array?: string[]) {
    return array?.indexOf(value) === index;
  }

  const [data, setData] = useState<api_data>({});
  const [chosenYear, setChosenYear] = useState<string>("");
  const [years, setYears] = useState<string[] | undefined>([""]);
  const [selectDisabled, setSelectDisabled] = useState<boolean>(true);
  const handleChange = (event: SelectChangeEvent) => {
    setChosenYear(event.target.value);
  };
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((res_data) => setData(res_data))
      .then((_) =>
        setYears(
          data.nobelPrizes
            ?.map((obj: nobel_info) => obj.awardYear)
            .filter(onlyUnique)
        )
      )
      .finally(() => setSelectDisabled(false));
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
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
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
      <Button>OK</Button>
    </Box>
  );
}

export default Main;
