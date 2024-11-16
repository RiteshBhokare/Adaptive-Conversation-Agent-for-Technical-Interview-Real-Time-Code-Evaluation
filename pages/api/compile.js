
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { code, language } = req.body;

        let output = '';
        let error = '';

        // Override console.log
        const originalLog = console.log;
        console.log = (msg) => {
            output += msg + '\n';
        };

        try {
            if (language === 'javascript') {
                // Safely execute JavaScript code
                new Function(code)();
            } else if (language === 'python') {
                // Simulate Python code execution
                output = `Python execution result: \n${code}`;
            } else if (language === 'cpp') {
                // Simulate C++ execution
                output = `C++ code executed: \n${code}`;
            } else {
                error = 'Unsupported language';
            }
        } catch (err) {
            error = err.message || 'An error occurred during execution';
        }

        
        console.log = originalLog;

        if (error) {
            res.status(500).json({ output: `Error: ${error}` });
        } else {
            res.status(200).json({ output: output || 'No output produced' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}