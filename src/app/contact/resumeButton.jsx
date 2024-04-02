import React from 'react';

function ResumeButton() {
  const handleDownload = () => {
    const url = '/resume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Elnagdy, Omar Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
}

export default ResumeButton;
