import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setShowOverlay(false);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Video thumbnail overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="w-20 h-20 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
            <Play
              className="w-10 h-10 text-white fill-white transform translate-x-1"
              strokeWidth={1.5}
            />
          </div>
        </div>
      )}

      {/* Custom video player container */}
      <div className="w-full h-full rounded-3xl overflow-hidden">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/02CcY9Z_t_8?si=qvBL6oPoKMw9xmGR&autoplay=1&rel=0&start=2"  // Start from 0.2s
            title="PREPCO HOPE Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full object-cover"
            frameBorder="0"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/api/placeholder/800/450')` // Thumbnail
            }}
          />
        )}
      </div>

      {/* Video info overlay (Optional, can be uncommented if needed) */}
      {/* 
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl transform transition-all duration-300 opacity-0 group-hover:opacity-100">
        <h3 className="text-[#017F7E] font-medium text-sm">PREPCO HOPE Initiative</h3>
        <p className="text-[#505050] text-xs mt-1">Fighting Lifestyle Diseases in Tamil Nadu</p>
      </div> 
      */}
    </div>
  );
};

export default VideoPlayer;
