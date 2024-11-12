
import React from 'react';
import VideoChat from './VideoChat';
import CodeEditor from './CodeEditor';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <div className="video-section">
        <VideoChat />
      </div>
      <div className="editor-section">
        <CodeEditor />
      </div>
    </div>
  );
};

export default App;