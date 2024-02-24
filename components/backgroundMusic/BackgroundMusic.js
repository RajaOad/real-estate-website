"use client"

import { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';

const BackgroundMusic = ({ src, volume }) => {
  const [audio] = useState(new Howl({
    src: [src],
    volume: volume,
    loop: true,
    autoplay: true
  }));

  useEffect(() => {
    audio.volume(volume);

    return () => {
      audio.stop();
    };
  }, [audio, volume]);

  return null;
};

export default BackgroundMusic;
