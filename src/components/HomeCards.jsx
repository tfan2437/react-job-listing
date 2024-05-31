import Card from "./Card";
import "./HomeCards.css";

const HomeCards = () => {
  return (
    <div className="cards-container">
      <Card
        typeName="Developer"
        description="Browse our developer jobs and start your career today"
        buttonFunction="Browse Jobs"
        cardBg="#e9dcf8"
      />
      <Card
        typeName="Employer"
        description="List your job to find the perfect developer for the role"
        buttonFunction="Post Job"
        cardBg="#c7edfa"
      />
    </div>
  );
};

export default HomeCards;
