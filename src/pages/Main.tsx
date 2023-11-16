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
import Laureate from "../components/Laureate";
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";

const DEFAULT_PRIZE: prize = {
  awardYear: "null",
  category: {},
  categoryFullName: {},
  dateAwarded: "",
  prizeAmount: 0,
  prizeAmountAdjusted: 0,
  laureates: [],
};

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
      .then((res_data) => {
        setData(res_data);
        setYears(
          data.nobelPrizes
            ?.map((obj: prize) => obj.awardYear)
            .filter(onlyUnique)
        );
      })
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
      <Laureate
        awardYear={data.nobelPrizes?.[0]?.awardYear ?? DEFAULT_PRIZE.awardYear}
        category={data.nobelPrizes?.[0]?.category ?? DEFAULT_PRIZE.category}
        categoryFullName={
          data.nobelPrizes?.[0]?.categoryFullName ??
          DEFAULT_PRIZE.categoryFullName
        }
        dateAwarded={
          data.nobelPrizes?.[0]?.dateAwarded ?? DEFAULT_PRIZE.dateAwarded
        }
        prizeAmount={
          data.nobelPrizes?.[0]?.prizeAmount ?? DEFAULT_PRIZE.prizeAmount
        }
        prizeAmountAdjusted={
          data.nobelPrizes?.[0]?.prizeAmountAdjusted ??
          DEFAULT_PRIZE.prizeAmountAdjusted
        }
        laureates={data.nobelPrizes?.[0]?.laureates ?? DEFAULT_PRIZE.laureates}
      ></Laureate>
    </Box>
  );
}

export default Main;
