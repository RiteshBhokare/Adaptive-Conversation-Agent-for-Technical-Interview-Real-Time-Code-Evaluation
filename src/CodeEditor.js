
import React from 'react';
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// Write your code here"
      theme="vs-dark"
    />
  );
};

export default CodeEditor;