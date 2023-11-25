import Languages from "./Languages";

interface LaureateBoxProps {
  id: number;
  knownName?: Languages;
  fullName?: Languages;
  orgName?: Languages;
  nativeName?: string;
  portion: string;
  motivation: Languages;
  prizeAmount: number;
  prizeAmountAdjusted: number;
  awardYear: string;
  dateAwarded?: string;
  category: Languages;
  categoryFullName: Languages;
  lang: string;
  timeout: number;
  playFn: () => void;
}
export default LaureateBoxProps;
