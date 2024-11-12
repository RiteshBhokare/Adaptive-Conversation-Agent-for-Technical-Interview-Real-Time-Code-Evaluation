
import React from 'react';
import Webcam from 'react-webcam';

const VideoChat = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Webcam />
    </div>
  );
};

export default VideoChat;