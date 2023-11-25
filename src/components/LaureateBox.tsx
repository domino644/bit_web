import { formatPrize } from "../util/PrizeFormat";
import { reverseDate } from "../util/DateReverse";
import { LaureateBoxContent } from "./LaureateBoxContent";
import LaureateBoxProps from "../interfaces/LaureateBoxProps";

const LaureateBox = (props: LaureateBoxProps) => {
  switch (props.lang) {
    case "en":
      return (
        <LaureateBoxContent
          playFn={props.playFn}
          timeout={props.timeout}
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
          prizeSK={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          prizeUSD={formatPrize(props.prizeAmount * eval(props.portion))}
          motivation={
            props.motivation.en ? props.motivation.en : "motivation unknown"
          }
        />
      );
    case "se":
      return (
        <LaureateBoxContent
          playFn={props.playFn}
          timeout={props.timeout}
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
          prizeSK={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          prizeUSD={formatPrize(props.prizeAmount * eval(props.portion))}
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
          playFn={props.playFn}
          timeout={props.timeout}
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
          prizeSK={formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
          prizeUSD={formatPrize(props.prizeAmount * eval(props.portion))}
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
