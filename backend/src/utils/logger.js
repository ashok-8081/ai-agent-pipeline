const fs = require("fs");
const path = require("path");

function logRequest(data){

    const logPath = path.join(__dirname,"../logs/requests.log");

    const log = `
Time : ${new Date().toISOString()}

Question : ${data.question}

Context Tokens : ${data.contextTokens}

Summary Tokens : ${data.summaryTokens}

Final Tokens : ${data.finalTokens}

Latency : ${data.latency} ms

-------------------------
`;

    fs.appendFileSync(logPath,log);

}

module.exports = logRequest;