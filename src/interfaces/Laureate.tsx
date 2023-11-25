import Languages from "./Languages";

interface Laureate {
  id: number;
  knownName?: Languages;
  fullName?: Languages;
  orgName?: Languages;
  nativeName?: string; 
  portion: string;
  sortOrder: string;
  motivation: Languages;
}

export default Laureate;
