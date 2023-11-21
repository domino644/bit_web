import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import prize from "../interfaces/prize";
import NavBar from "../components/NavBar";
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

export default function Prizes() {
  const params: Readonly<Params<string>> = useParams();
  useEffect(() => {
    // fetch(URL)
    // .then(res => res.json())
    // .then
  }, []);
  return (
    <>
      <NavBar />
      <div>Prizes</div>
    </>
  );
}
