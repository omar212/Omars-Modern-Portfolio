import React from 'react';

const Card = ({ jobTitle, jobDesc, jobDate, jobCompany }) => {
  return (
    <div className="flex h-fit">
      {/* LEFT */}
      <div className="w-full  text-white rounded-lg overflow-wrap-break-word">
        {/* JOB TITLE */}
        <div className="
            flex
            border-b-2 
            border-white
            bg-white 
            text-black  
            rounded-t-lg 
            p-3 
            font-semibold
            gap-2">
          {jobTitle} 
          <span className="text-green-400"> @ </span>
          
          <div className="text-red-500 font-semibold inline">{jobCompany}</div>
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm italic bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">
          {jobDesc.map((desc, index) => (
            <React.Fragment key={index}>
                <li>{desc}</li>
                {index !== jobDesc.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        {/* JOB DATE */}
        <div className="p-3 text-blue-500 border-t-2 bg-white border-white text-sm font-semibold text-center">
          {jobDate}
        </div>
      </div>
    </div>
  );
};

export default Card;
