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
      className=" hover:bg-blue-700 font-bold flex items-center"
      onClick={handleShare}
    >
      <HiShare className="" />
    </button>
  );
}

export default ShareButton;
