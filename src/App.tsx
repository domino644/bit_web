import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { Prizes } from "./pages/Prizes";
import { DataContextProvider } from "./hooks/useDataContext";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <DataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/prizes/:lang/:year" element={<Prizes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </ThemeProvider>
  );
}

export default App;
