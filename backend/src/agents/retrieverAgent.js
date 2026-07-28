const askLLM = require("../services/llmService");
const docs = require("../knowledge/docs");

async function retrieverAgent(question, optimized = true) {
  console.log("Retriever Agent Running...");

  const query = question.toLowerCase();

  // Search local knowledge base
  const document = docs.find((doc) =>
    doc.title.toLowerCase().includes(query) ||
    doc.content.toLowerCase().includes(query)
  );

  // If found locally
  if (document) {
    console.log("Local document found.");

    if (optimized) {
      // Return only the relevant content
      return document.content;
    }

    // Non-optimized mode (simulate sending extra context)
    return `
Title: ${document.title}

${document.content}

Extra Notes:
This section contains additional information that increases token usage.
`;
  }

  // Fallback to LLM
  console.log("No local document found. Asking Groq...");

  const answer = await askLLM(question);

  return answer;
}

module.exports = retrieverAgent;