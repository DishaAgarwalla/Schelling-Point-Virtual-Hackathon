import React from "react";
import styled from "styled-components";
import VideoJS from "../components/VideoJS"; // point to where the functional component is stored

const Container = styled.div`
  display: grid;
  max-height: 80vh !important;
`;

const Holders = ({ sessions }) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    height: 10,
    width: 10,
    sources: [
      {
        src: "https://lax-cdn.livepeer.com/recordings/e42b9d48-fcb3-4c33-9043-c2a909055525/index.m3u8",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <Container>
      <div>AMA Session</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </Container>
  );
};

export default Holders;
