import "./JobCard.css";
import { useState } from "react";

const JobCard = ({
  jobType = "Contract",
  jobTitle = "Title",
  jobDiscription = "Description...",
  jobSalary = "0",
  jobLocation = "Taipei",
}) => {
  let description = jobDiscription;

  const [fullDescription, setFullDescription] = useState(false);

  if (!fullDescription) {
    description = description.substring(0, 100) + "...";
  }

  const handleDiscription = () => {
    setFullDescription(!fullDescription);
  };

  return (
    <div className="jobcard-container">
      <div className="job-info">
        <h3>{jobType}</h3>
        <h2>{jobTitle}</h2>
        <p>{description}</p>
        <button onClick={handleDiscription}>
          {fullDescription ? "Less" : "More"}
        </button>
      </div>

      <div className="job-salary-location">
        <p>{jobSalary} / Year</p>
        <hr />
        <p>{jobLocation}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default JobCard;
