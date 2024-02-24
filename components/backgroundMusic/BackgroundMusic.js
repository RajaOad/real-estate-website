"use client"

import { useEffect, useRef } from 'react';

const BackgroundMusic = ({ src, volume }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const initializeAudio = () => {
      if (audio) {
        audio.loop = true;
        audio.volume = volume;

        // Start music playback
        audio.play()
          .catch(error => {
            console.error('Failed to play audio:', error);
          });
      }
    };

    const handleUserInteraction = () => {
      // Start audio playback when the user interacts with the page
      initializeAudio();
      // Remove event listener to prevent repeated playback
      document.removeEventListener('click', handleUserInteraction);
    };

    // Attach event listener to start playback on user interaction
    document.addEventListener('click', handleUserInteraction);

    return () => {
      // Clean up audio when the component unmounts
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [volume]);

  return <audio ref={audioRef} src={src} />;
};

export default BackgroundMusic;

