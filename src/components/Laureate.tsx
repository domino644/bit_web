import prize from "../interfaces/prize";

function Laureate(props: prize) {
  return (
    <>
      <div>Laureate</div>
      <ul>
        <li>{props.awardYear}</li>
        <li>{props.category.en}</li>
        <li>{props.categoryFullName.en}</li>
        <li>{props.dateAwarded}</li>
      </ul>
    </>
  );
}

export default Laureate;
