import React from 'react';

const Card = ({ jobTitle, jobDesc, jobDate, jobCompany }) => {
  return (
    <div className="flex h-fit pb-5">
      {/* LEFT */}
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 text-white rounded-lg">
        {/* JOB TITLE */}
        <div className="border-b-2 border-white text-white  rounded-t-lg p-3 font-semibold">
          {jobTitle} 
          <span className="text-green-400"> @ </span>
          
          <div className="text-red-500 font-semibold inline"> {jobCompany}</div>
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic">
          {jobDesc.map((desc, index) => (
            <React.Fragment key={index}>
                <li>{desc}</li>
                {index !== jobDesc.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-blue-500 border-t-2 border-white text-sm font-semibold text-center">
          {jobDate}
        </div>
      </div>
    </div>
  );
};

export default Card;
