import { Box, Button, Grow, Paper } from "@mui/material";
import { filterEntities, filterHTML } from "../util/HTMLStringFilter";
import nobelLogo from "../static/png/nobel.png";
import polandFlag from "../static/png/poland.png";
import "../css/LaureateBoxContent.css";
import { AvailableCurrencies } from "../types/AvailableCurrencies";
import { useState } from "react";

interface Props {
  fullName: string;
  categoryFullName: string;
  awardYear: string;
  dateAwarded: string;
  prizeSK: string;
  prizeUSD: string;
  motivation: string;
  timeout: number;
  playFn: () => void;
}

export const LaureateBoxContent = (props: Props) => {
  const [currency, setCurrency] = useState<AvailableCurrencies>("SEK");
  const toggleCurrency = () => {
    if (currency === "SEK") setCurrency("USD");
    else setCurrency("SEK");
  };

  return (
    <Grow in={true} timeout={props.timeout}>
      <Paper elevation={7} sx={{ padding: "5px", width: "96%" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={nobelLogo} alt="nobel prize medal" width={40} height={40} />
          <h3>{props.fullName}</h3>
          {props.fullName.includes("Sklodowska") ||
          props.fullName.includes("Sienkiewicz") ? (
            <img
              className="polak-rodak"
              src={polandFlag}
              alt="polish flag"
              width={30}
              onClick={props.playFn}
            />
          ) : (
            <></>
          )}
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
            {currency === "SEK" ? (
              <>
                <span style={{ marginRight: "10px" }}>
                  Prize: {props.prizeSK} SKE
                </span>
                <Button onClick={toggleCurrency}>to USD</Button>
              </>
            ) : (
              <>
                <span style={{ marginRight: "10px" }}>
                  Prize: {props.prizeUSD} USD
                </span>
                <Button onClick={toggleCurrency}>to SEK</Button>
              </>
            )}
          </Box>
        </Box>
      </Paper>
    </Grow>
  );
};
