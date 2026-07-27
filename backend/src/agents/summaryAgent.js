const askLLM = require("../services/llmService");
const {
  getConversationSummary,
  updateConversationSummary,
} = require("../memory/conversationMemory");

async function summaryAgent(context) {
  console.log("Summary Agent Running...");

  const previousSummary = getConversationSummary();

  const prompt = `
You are a helpful assistant.

Previous Conversation Summary:

${previousSummary}

Current Context:

${context}

Update the conversation summary in under 120 words.
`;
  await new Promise(resolve => setTimeout(resolve, 7000));
  const summary = await askLLM(prompt);
  updateConversationSummary(summary);

  return null;
}

module.exports = summaryAgent;
