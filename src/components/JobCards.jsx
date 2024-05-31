import JobCard from "./JobCard";
import "./JobCards.css";

const JobCards = () => {
  return (
    <div className="jobcards-container-outter">
      <div className="jobcards-container">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobCards;
