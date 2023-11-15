import React from "react";
import { useEffect, useState } from "react";
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";

function Main() {
  const [laureates, setLaureates] = useState({});
  useEffect(() => {
    fetch(URL);
  }, []);
  return <></>;
}

export default Main;
