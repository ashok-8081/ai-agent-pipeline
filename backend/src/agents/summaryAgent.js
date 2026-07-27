const askLLM = require("../services/llmService");

const {
  getConversationSummary,
  updateConversationSummary,
} = require("../memory/conversationMemory");

async function summaryAgent(context) {

  console.log("Summary Agent Running...");

  const previousSummary = getConversationSummary();

  const prompt = `
You are an expert summarizer.

Previous Summary:
${previousSummary}

Current Context:
${context}

Task:

Summarize ONLY the important information.

Rules:

- Maximum 20 words.
- Remove repetition.
- Keep only key facts.
- Do not explain.
- Return only the summary.
`;

  const summary = await askLLM(prompt);

  updateConversationSummary(summary);

  return summary;
}

module.exports = summaryAgent;