import React, { useState, useEffect } from "react";
import './Player.scss'


const useAudio = () => {
  const sound = require('../sounds/fon.mp3');
  const [audio] = useState(new Audio(sound.default));

  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = useAudio();

  return (
    <div>
      <span>Background music: </span>
      <button className='music-button' onClick={(event) => typeof toggle !== "boolean" && toggle()}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;
