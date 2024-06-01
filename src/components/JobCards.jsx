import JobCard from "./JobCard";
import "./JobCards.css";
import { jobs } from "../assets/data/jobs";

const JobCards = () => {
  return (
    <div className="jobcards-container-outter">
      <div className="jobcards-container">
        {jobs.map((job) => (
          <JobCard
            jobType={job.type}
            jobTitle={job.title}
            jobDiscription={job.description}
            jobSalary={job.salary}
            jobLocation={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default JobCards;
