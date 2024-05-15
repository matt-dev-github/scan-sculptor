const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// // Endpoint to receive Nmap command arguments and execute Nmap
// app.post('/run-nmap', (req, res) => {
//     const nmapArgs = req.body.nmapArgs;

//     // Construct the Nmap command with the provided arguments
//     const command = `nmap ${nmapArgs}`;

//     // Execute the Nmap command
//     exec(command, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).json({ error: `Execution error: ${error.message}` });
//         }
//         if (stderr) {
//             console.error(`stderr: ${stderr}`);
//             return res.status(500).json({ error: stderr });
//         }

//         // Send the result of the Nmap command back to the client
//         res.json({ result: stdout });
//     });
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
