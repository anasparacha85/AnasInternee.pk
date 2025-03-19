import React from "react";
// Job List Component
export const JobList=()=> {
    const jobs = [
      { title: 'Frontend Developer', company: 'Internee.pk', location: 'Remote' },
      { title: 'Backend Developer', company: 'Internee.pk', location: 'Remote' },
      { title: 'UI/UX Designer', company: 'Internee.pk', location: 'Remote' }
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p>{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Apply Now</button>
          </div>
        ))}
      </div>
    );
  }
  export default JobList
  