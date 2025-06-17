import React, { useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaRedo,
} from "react-icons/fa";
import "./styles.css";

function VideoPlayer({ src, title, loop = false }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <div className="video-player">
      <div className={`video-title ${isPlaying ? "fade-out" : "fade-in"}`}>
        {title}
      </div>

      <div className="video-container" onClick={handlePlayPause}>
        <video
          ref={videoRef}
          src={src}
          className="video-element"
          loop={loop}
          title={title}
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>

        <div className="video-overlay">
          <span className="overlay-icon">
            {!isPlaying && <FaPlay className="video-controlls" />}
          </span>
        </div>
      </div>

      <div className="controls">
        <button
          className="control-btn"
          onClick={handlePlayPause}
          title={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          className="control-btn"
          onClick={handleMute}
          title={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          title="Controle de volume"
        />

        <span className="loop-indicator" title="Repetição automática">
          <FaRedo />
        </span>
      </div>
    </div>
  );
}

export default VideoPlayer;
