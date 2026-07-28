const askLLM = require("../services/llmService");
const docs = require("../knowledge/docs");

async function retrieverAgent(question, optimized = true) {
  console.log("Retriever Agent Running...");

  const query = question.toLowerCase();

  // Split the user's question into words
  const queryWords = query.split(" ");

  // Search local knowledge base
  const document = docs.find((doc) => {
    const topic = (doc.topic || "").toLowerCase();
    const content = (doc.content || "").toLowerCase();

    return queryWords.some(
      (word) => topic.includes(word) || content.includes(word)
    );
  });

  // Local document found
  if (document) {
    console.log("Found local document:", document.topic);

    if (optimized) {
      return document.content;
    }

    return `
Topic: ${document.topic}

${document.content}

Extra Notes:
This is additional information added intentionally to simulate higher token usage.
`;
  }

  // No local document → Ask Groq
  console.log("No local document found. Falling back to Groq...");

  return await askLLM(question);
}

module.exports = retrieverAgent;