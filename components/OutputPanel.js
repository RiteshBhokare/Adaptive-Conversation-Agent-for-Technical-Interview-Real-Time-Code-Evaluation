import React from 'react';

const OutputPanel = ({ output }) => {
  return (
    <div style={styles.terminal}>
      <h4 style={styles.title}>Terminal Output:</h4>
      <pre style={styles.outputText}>{output}</pre>
    </div>
  );
};

const styles = {
  terminal: {
    border: '2px solid #333',
    borderRadius: '8px',
    backgroundColor: '#1e1e1e',
    color: '#f5f5f5',
    padding: '15px',
    marginTop: '10px',
    fontFamily: "'Courier New', monospace",
  },
  title: {
    color: '#00ff00',
    marginBottom: '10px',
  },
  outputText: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
};

export default OutputPanel;