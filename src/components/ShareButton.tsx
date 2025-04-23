import React from 'react';

interface ShareButtonProps {
  username: string;
}

export function ShareButton({ username }: ShareButtonProps) {
  const handleShare = () => {
    const text = `Проверьте мою статистику на Discord сервере Seismic! #SeismicCard`;
    const url = window.location.href;
    
    // Create Twitter/X share URL
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    
    // Open Twitter in a new window
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-full transition duration-200"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="white" 
        className="mr-2"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      Поделиться в X
    </button>
  );
} 