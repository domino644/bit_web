import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ApiData from "../interfaces/ApiData";
import { CircularProgress } from "@mui/material";
interface Props {
  children: ReactNode;
}
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";
const DataContext = createContext<ApiData>({});

export const DataContextProvider: React.FC<Props> = (props) => {
  const [data, setData] = useState<ApiData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setDataLoaded(true);
        console.log("data loaded");
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <DataContext.Provider value={data}>
          {props.children}
        </DataContext.Provider>
      )}
    </>
  );
};

export const useDataContext = () => {
  if (DataContext === undefined) {
    throw new Error("DataContext is undefined");
  }
  return useContext(DataContext);
};
