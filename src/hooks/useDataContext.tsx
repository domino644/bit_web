import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ApiData from "../interfaces/ApiData";
interface Props {
  children: ReactNode;
}
const URL: string = "https://api.nobelprize.org/2.1/nobelPrizes";
const DataContext = createContext<ApiData>({});

export const DataContextProvider: React.FC<Props> = (props) => {
  const [data, setData] = useState<ApiData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <div>Page is loading...</div>
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
