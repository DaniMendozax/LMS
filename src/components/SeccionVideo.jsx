import React from "react";

const SeccionVideo = () => {
  return (
    <div>
      <h2>Seccion Videos</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lWQ69WX7-hA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default SeccionVideo;
