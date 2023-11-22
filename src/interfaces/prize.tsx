import Languages from "./Languages";
import Laureate from "./Laureate";
interface Prize {
  awardYear: string;
  category: Languages;
  categoryFullName: Languages;
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  laureates: Laureate[];
}

export default Prize;
