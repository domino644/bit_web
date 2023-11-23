import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import Prize from "../interfaces/Prize";
import ApiData from "../interfaces/ApiData";
import { useDataContext } from "../hooks/useDataContext";
import LaureateBox from "../components/LaureateBox";
import { Grow } from "@mui/material";

export default function Prizes() {
  const { lang, year }: Readonly<Params<string>> = useParams();
  const [prizes, setPrizes] = useState<Prize[]>();
  const [ifCorrectYear, setIfCorrectYear] = useState<boolean>(true);
  const data: ApiData = useDataContext();

  useEffect(() => {
    if (!isNaN(parseInt(year ? year : "aaa")))
      setPrizes(data.nobelPrizes?.filter((el) => el.awardYear === year));
    else if (year === "all") setPrizes(data.nobelPrizes);
    else setIfCorrectYear(false);
  }, []);

  if (!ifCorrectYear)
    return <div style={{ color: "red" }}>Incorrect year format provided</div>;

  const laureatesComponents = prizes?.map((el, i) =>
    el.laureates.map((lau) => {
      return (
        <LaureateBox
          key={lau.id}
          knownName={lau.knownName}
          fullName={lau.fullName}
          orgName={lau.orgName}
          nativeName={lau.nativeName}
          portion={lau.portion}
          motivation={lau.motivation}
          prizeAmount={el.prizeAmount}
          prizeAmountAdjusted={el.prizeAmountAdjusted}
          awardYear={el.awardYear}
          dateAwarded={el.dateAwarded}
          category={el.category}
          categoryFullName={el.categoryFullName}
          lang={lang ? lang : "en"}
          timeout={(6000 / prizes.length + 1) * (i + 1)}
        />
      );
    })
  );

  return (
    <>
      <NavBar />
      {laureatesComponents?.length == 0 ? (
        <div>No data for Nobel Prize winners in {year}</div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {laureatesComponents}
        </div>
      )}
    </>
  );
}
