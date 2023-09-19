// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import videojs from 'video.js';
import background from '../assets/matrix.mp4';
import 'video.js/dist/video-js.css';

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      autoplay: false,
      loop: true,
      controls: false,
      fluid: true,
      muted: true,
      sources: [
        {
          src: background,
          type: 'video/mp4',
        },
      ],
    };

    const videoPlayer = videojs(videoRef.current, options, () => {
      setPlayer(videoPlayer);
    });

    // Add intersection observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (player) {
        player.dispose(); // Clean up the player
      }
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Remove observer
      }
    };
  }, []);

  useEffect(() => {
    if (player) {
      if (isVisible) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [isVisible, player]);

  return (
    <div className="background-video-container">
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
      ></video>
    </div>
  );
};

export default BackgroundVideo;
