import React from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Webcam
        audio={false}
        height={400}
        width={300}
        videoConstraints={{
          facingMode: 'user',
        }}
      />
    </div>
  );
};

export default WebcamComponent;