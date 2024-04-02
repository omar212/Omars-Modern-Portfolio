import React from 'react';
import { HiShare } from 'react-icons/hi'; // Importing the share icon from HeroIcons

function ShareButton() {
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: url,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      onClick={handleShare}
    >
      <HiShare className="mr-2" />
    </button>
  );
}

export default ShareButton;
