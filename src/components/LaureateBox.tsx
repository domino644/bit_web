import { formatPrize } from "../util/PrizeFormat";
import { reverseDate } from "../util/DateReverse";
import Languages from "../interfaces/Languages";
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
        <>
          <div>
            {props.fullName?.en
              ? props.fullName.en
              : props.orgName?.en
              ? props.orgName?.en
              : props.nativeName
              ? props.nativeName
              : "name undefined"}
          </div>
          <ul>
            <li>{props.awardYear}</li>
            <li>
              {props.categoryFullName.en
                ? props.categoryFullName.en
                : "category undefined"}
            </li>
            <li>
              {props.dateAwarded
                ? reverseDate(props.dateAwarded)
                : "Exact date unknown"}
            </li>
            <li>
              {formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
            </li>
          </ul>
        </>
      );
    case "se":
      return (
        <>
          <div>
            {props.fullName?.se
              ? props.fullName.se
              : props.orgName?.se
              ? props.orgName?.se
              : props.nativeName
              ? props.nativeName
              : props.fullName?.en
              ? props.fullName.en
              : "name undefined"}
          </div>
          <ul>
            <li>{props.awardYear}</li>
            <li>
              {props.categoryFullName.se
                ? props.categoryFullName.se
                : props.categoryFullName.en
                ? props.categoryFullName.en
                : "category undefined"}
            </li>
            <li>
              {props.dateAwarded
                ? reverseDate(props.dateAwarded)
                : "Exact date unknown"}
            </li>
            <li>
              {formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
            </li>
          </ul>
        </>
      );
    case "no":
      return (
        <>
          <div>
            {props.fullName?.no
              ? props.fullName.no
              : props.orgName?.no
              ? props.orgName?.no
              : props.nativeName
              ? props.nativeName
              : props.fullName?.en
              ? props.fullName.en
              : "name undefined"}
          </div>
          <ul>
            <li>{props.awardYear}</li>
            <li>
              {props.categoryFullName.no
                ? props.categoryFullName.no
                : props.categoryFullName.en
                ? props.categoryFullName.en
                : "category undefined"}
            </li>
            <li>
              {props.dateAwarded
                ? reverseDate(props.dateAwarded)
                : "Exact date unknown"}
            </li>
            <li>
              {formatPrize(props.prizeAmountAdjusted * eval(props.portion))}
            </li>
          </ul>
        </>
      );
    default:
      return <></>;
  }
};

export default LaureateBox;
