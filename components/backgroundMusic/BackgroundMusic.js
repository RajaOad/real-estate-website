"use client"

import React, { useState, useEffect } from 'react';

const BackgroundMusic = ({ src, volume }) => {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.loop = true;
    audio.volume = volume;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, volume]);

  return null;
};

export default BackgroundMusic;
