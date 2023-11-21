import { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Prizes from "./pages/Prizes";
interface languageState {
  language: string;
  setLanguage: (lang: string) => void;
}
const LanguageContext = createContext<languageState>({
  language: "en",
  setLanguage: (lang: string) => {},
});

function App() {
  const [language, setLanguage] = useState<string>("en");
  const value: languageState = {
    language: language,
    setLanguage: setLanguage,
  };

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={value}>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/prizes/:year" element={<Prizes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("context is undefined");
  }
  return context;
};

export default App;
