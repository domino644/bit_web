import { formatPrize } from "../util/PrizeFormat";
import { reverseDate } from "../util/DateReverse";
import Languages from "../interfaces/Languages";
import { LaureateBoxContent } from "./LaureateBoxContent";
interface LaureateBoxProps {
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
}
const LaureateBox = (props: LaureateBoxProps) => {
  switch (props.lang) {
    case "en":
      return (
        <LaureateBoxContent
          fullName={
            props.fullName?.en
              ? props.fullName.en
              : props.orgName?.en
              ? props.orgName?.en
              : props.nativeName
              ? props.nativeName
              : "name unknown"
          }
          awardYear={props.awardYear}
          categoryFullName={
            props.categoryFullName.en
              ? props.categoryFullName.en
              : "category unknown"
          }
          dateAwarded={
            props.dateAwarded
              ? reverseDate(props.dateAwarded)
              : "Exact date unknown"
          }
          prize={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          motivation={
            props.motivation.en ? props.motivation.en : "motivation unknown"
          }
        />
      );
    case "se":
      return (
        <LaureateBoxContent
          fullName={
            props.fullName?.se
              ? props.fullName.se
              : props.orgName?.se
              ? props.orgName?.se
              : props.nativeName
              ? props.nativeName
              : props.fullName?.en
              ? props.fullName.en
              : "name unknown"
          }
          awardYear={props.awardYear}
          categoryFullName={
            props.categoryFullName.se
              ? props.categoryFullName.se
              : props.categoryFullName.en
              ? props.categoryFullName.en
              : "category unknown"
          }
          dateAwarded={
            props.dateAwarded
              ? reverseDate(props.dateAwarded)
              : "Exact date unknown"
          }
          prize={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          motivation={
            props.motivation.se
              ? props.motivation.se
              : props.motivation.en
              ? props.motivation.en
              : "motivation unknown"
          }
        />
      );
    case "no":
      return (
        <LaureateBoxContent
          fullName={
            props.fullName?.no
              ? props.fullName.no
              : props.orgName?.no
              ? props.orgName?.no
              : props.nativeName
              ? props.nativeName
              : props.fullName?.en
              ? props.fullName.en
              : "name unknown"
          }
          awardYear={props.awardYear}
          categoryFullName={
            props.categoryFullName.no
              ? props.categoryFullName.no
              : props.categoryFullName.en
              ? props.categoryFullName.en
              : "category unknown"
          }
          dateAwarded={
            props.dateAwarded
              ? reverseDate(props.dateAwarded)
              : "Exact date unknown"
          }
          prize={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          motivation={
            props.motivation.no
              ? props.motivation.no
              : props.motivation.en
              ? props.motivation.en
              : "motivation unknown"
          }
        />
      );
    default:
      return <></>;
  }
};

export default LaureateBox;
