import "./MainCard.css";

const MainCard = ({
  typeName = "For Employers",
  description = "Job description",
  buttonFunction = "Function",
  cardBg = "#c7edfa",
}) => {
  const goWhere = () => {
    console.log("link to somewhere");
  };

  return (
    <div className="card-container" style={{ background: cardBg }}>
      <h1>{typeName}</h1>
      <p>{description}</p>
      <button onClick={(e) => goWhere()}>{buttonFunction}</button>
    </div>
  );
};

export default MainCard;
