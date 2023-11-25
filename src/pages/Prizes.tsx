import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import Prize from "../interfaces/Prize";
import ApiData from "../interfaces/ApiData";
import { useDataContext } from "../hooks/useDataContext";
import LaureateBox from "../components/LaureateBox";
import { Paper } from "@mui/material";
import { useAudio } from "../hooks/useAudio";
import polskaGurom from "../static/mp3/polska_gurom.mp3";
import { FilterBar } from "../components/FilterBar";
import FilterParams from "../interfaces/FilterParams";
import LaureateBoxProps from "../interfaces/LaureateBoxProps";

export const Prizes = () => {
  const [filters, setFilters] = useState<FilterParams>({
    categoryFilter: "all",
  });
  const onlyUnique = (value: string, index: number, array?: string[]) => {
    return array?.indexOf(value) === index;
  };

  const { lang, year }: Readonly<Params<string>> = useParams();
  const [prizes, setPrizes] = useState<Prize[]>();
  const [laureatesInfo, setLaureatesInfo] = useState<LaureateBoxProps[]>([]);
  const [ifCorrectYear, setIfCorrectYear] = useState<boolean>(true);
  const data: ApiData = useDataContext();
  const [_playing, toggle] = useAudio(polskaGurom);
  const allYears = data.nobelPrizes
    ?.map((el) => el.awardYear)
    .filter(onlyUnique)
    .sort();

  useEffect(() => {
    if (!isNaN(parseInt(year ? year : "aaa"))) {
      setPrizes(data.nobelPrizes?.filter((el) => el.awardYear === year));
      let tab: LaureateBoxProps[] = [];
      prizes?.map((el, i) =>
        el.laureates.map((lau) => {
          let l: LaureateBoxProps = {
            id: lau.id,
            knownName: lau.knownName,
            fullName: lau.fullName,
            orgName: lau.orgName,
            nativeName: lau.nativeName,
            dateAwarded: el.dateAwarded,
            portion: lau.portion,
            motivation: lau.motivation,
            prizeAmount: el.prizeAmount,
            prizeAmountAdjusted: el.prizeAmountAdjusted,
            awardYear: el.awardYear,
            category: el.category,
            categoryFullName: el.categoryFullName,
            lang: lang ? lang : "en",
            timeout: (6000 / prizes.length + 1) * (i + 1),
            playFn: toggle,
          };
          tab.push(l);
        })
      );
      setLaureatesInfo(tab);
    } else if (year === "all") {
      setPrizes(data.nobelPrizes);
      let tab: LaureateBoxProps[] = [];
      prizes?.map((el, i) =>
        el.laureates.map((lau) => {
          let l: LaureateBoxProps = {
            id: lau.id,
            knownName: lau.knownName,
            fullName: lau.fullName,
            orgName: lau.orgName,
            nativeName: lau.nativeName,
            dateAwarded: el.dateAwarded,
            portion: lau.portion,
            motivation: lau.motivation,
            prizeAmount: el.prizeAmount,
            prizeAmountAdjusted: el.prizeAmountAdjusted,
            awardYear: el.awardYear,
            category: el.category,
            categoryFullName: el.categoryFullName,
            lang: lang ? lang : "en",
            timeout: (6000 / prizes.length + 1) * (i + 1),
            playFn: toggle,
          };
          tab.push(l);
        })
      );
      setLaureatesInfo(tab);
    } else setIfCorrectYear(false);
  }, [
    setIfCorrectYear,
    laureatesInfo,
    data.nobelPrizes,
    lang,
    prizes,
    toggle,
    year,
  ]);

  if (!ifCorrectYear)
    return <div style={{ color: "red" }}>Incorrect year format provided</div>;
  const filteredInfo = laureatesInfo.filter((el) => {
    if (filters.categoryFilter !== "all")
      return filters.categoryFilter === el.category.en;
    return true;
  });

  const laureatesComponents = filteredInfo.map((el) => {
    return (
      <LaureateBox
        key={el.id}
        id={el.id}
        knownName={el.knownName}
        fullName={el.fullName}
        orgName={el.orgName}
        nativeName={el.nativeName}
        dateAwarded={el.dateAwarded}
        portion={el.portion}
        motivation={el.motivation}
        prizeAmount={el.prizeAmount}
        prizeAmountAdjusted={el.prizeAmountAdjusted}
        awardYear={el.awardYear}
        category={el.category}
        categoryFullName={el.categoryFullName}
        lang={el.lang}
        timeout={el.timeout}
        playFn={el.playFn}
      />
    );
  });

  return (
    <>
      <NavBar />
      {laureatesComponents?.length === 0 ? (
        <h1 style={{ color: "white", width: "100%", textAlign: "center" }}>
          No data for Nobel Prize winners in {year}
        </h1>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {year === "all" && allYears !== undefined ? (
            <Paper sx={{ width: "96%", textAlign: "center", padding: "5px" }}>
              <h3>
                All Nobel Prize laureates in years {allYears[0]} to{" "}
                {allYears[allYears.length - 1]}
              </h3>
            </Paper>
          ) : (
            <Paper sx={{ width: "96%", textAlign: "center", padding: "5px" }}>
              <h3>Nobel Prize laureates in {year}</h3>
            </Paper>
          )}
          <FilterBar filterFn={setFilters} />
          {laureatesComponents}
        </div>
      )}
    </>
  );
};
