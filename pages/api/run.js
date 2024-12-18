
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { code, language } = req.body;

        let output;

        try {
            output = `Running ${language} code:\n${code}`;
        } catch (error) {
            output = `Error: ${error.message}`;
        }

        res.status(200).json({ output });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}