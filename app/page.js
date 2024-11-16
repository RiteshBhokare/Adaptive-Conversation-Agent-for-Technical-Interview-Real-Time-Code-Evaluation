'use client';

import React, { useState } from 'react';
import WebcamComponent from '../components/Webcam';
import ChatLog from '../components/ChatLog';
import InputBar from '../components/InputBar';
import dynamic from 'next/dynamic';
import OutputPanel from '../components/OutputPanel'; // Assuming you have an OutputPanel component
import styles from '../styles/Home.module.css';

// Dynamically import the Monaco Editor with SSR disabled
const CodeEditor = dynamic(() => import('../components/CodeEditor'), { ssr: false });

export default function HomePage() {
    const [messages, setMessages] = useState([]);
    const [code, setCode] = useState('// Write your code here...');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('javascript');

    const handleSendMessage = (message) => {
        setMessages((prev) => [...prev, `:User      ${message}`]);
    };

    // Updated handleRunCode function with improved error logging
    const handleRunCode = async () => {
        console.log("Running code with language:", language);
        console.log("Code to run:", code);
        try {
            const response = await fetch('/api/compile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, language }),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Get the response text for more details
                console.error("Failed to compile code:", errorText);
                throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
            }

            const result = await response.json();
            console.log("Compilation result:", result);
            setOutput(result.output);
        } catch (error) {
            console.error("Error running code:", error);
            setOutput(`Error: ${error.message}`);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <div className={styles.webcamSection}>
                    <WebcamComponent />
                </div>
                <div className={styles.chatSection}>
                    <ChatLog messages={messages} />
                    <InputBar onSend={handleSendMessage} />
                </div>
            </div>
            <div className={styles.rightPanel}>
                <div className={styles.codeEditorSection}>
                    <CodeEditor
                        code={code}
                        setCode={setCode}
                        language={language}
                        setLanguage={setLanguage}
                        onRun={handleRunCode}  // Ensure this is passed as a prop
                    />
                </div>
                <OutputPanel output={output} /> {/* Displaying output here */}
            </div>
        </div>
    );
}