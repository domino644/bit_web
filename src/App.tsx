import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Prizes from "./pages/Prizes";
import { DataContextProvider } from "./hooks/useDataContext";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/prizes/:lang/:year" element={<Prizes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
