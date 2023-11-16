import languages from "./languages";
import laureate from "./laureate";
interface prize {
  awardYear: string;
  category: languages;
  categoryFullName: languages;
  dateAwarded: string;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  laureates: laureate[];
}

export default prize;
