import React from 'react';

const Card = ({ jobTitle, jobDesc, jobDate, jobCompany }) => {
  return (
    <div className="flex rounded-lg bg-gray-400 h-fit">
      {/* LEFT */}
      <div className="w-full overflow-wrap-break-word shadow-lg">
        {/* JOB TITLE */}
        <div className="
            flex
            justify-center
            border-b-2 
            border-gray
            text-black  
            rounded-t-lg 
            p-2 
            font-bold
            gap-1">
          {jobTitle} 
          <span className="font-medium">@</span>
          
          <div className="font-bold inline">{jobCompany}</div>
        </div>
        {/* JOB DESC */}
        <div className="p-3 text-sm font-medium">
          {jobDesc.map((desc, index) => (
            <React.Fragment key={index}>
                <li>{desc}</li>
                {index !== jobDesc.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
        {/* JOB DATE */}
        <div className="p-3 border-t-2 text-blue-500 text-sm font-bold text-center">
          {jobDate}
        </div>
      </div>
    </div>
  );
};

export default Card;
