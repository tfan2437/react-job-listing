import "./JobCard.css";

const JobCard = () => {
  return (
    <div className="jobcard-container">
      <h3>Job Type</h3>
      <h2>Job Title</h2>
      <p>Description Here...</p>
      <p>Salary $ / Year</p>
      <hr />
      <p>Location</p>
      <button>Read More</button>
    </div>
  );
};

export default JobCard;
