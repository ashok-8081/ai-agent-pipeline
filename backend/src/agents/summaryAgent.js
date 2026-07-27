const askLLM = require("../services/llmService");

async function summaryAgent(context) {
  console.log("Summary Agent Running...");

  const prompt = `
You are a helpful assistant.

Summarize the following information in 5 bullet points.

${context}
`;

  const summary = await askLLM(prompt);

  return summary;
}

module.exports = summaryAgent;
