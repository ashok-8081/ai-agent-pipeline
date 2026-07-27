const express = require("express");
const estimateTokens = require("../utils/tokenCounter");
// const logRequest = require("../utils/logger");

const retrieverAgent = require("../agents/retrieverAgent");
const summaryAgent = require("../agents/summaryAgent");
const formatterAgent = require("../agents/formatterAgent");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;
    const optimized = req.query.optimized !== "false";

    const requestStart = Date.now();

    //======= retriever
    console.log("Request received");
    console.log("Starting Retriever...");
    const context = await retrieverAgent(question, optimized);
    console.log("Retriever completed");

    const contextTokens = estimateTokens(context);

    //-========summary
    console.log("Starting Summary...");
    const summary = await summaryAgent(context);
    if (!summary) {
      throw new Error("Summary Agent returned empty output");
    }
    const summaryTokens = estimateTokens(summary);
    console.log("Summary completed");

    //======= formatter
    console.log("Starting Formatter...");
    const finalResponse = await formatterAgent(summary);
    if (!finalResponse) {
      throw new Error("Formatter Agent returned empty output");
    }
    const formattedTokens = estimateTokens(finalResponse);
    console.log("Formatter completed");

    const totalTime = Date.now() - requestStart;

    console.log("Question:", question);
    console.log("Context Tokens:", contextTokens);
    console.log("Summary Tokens:", summaryTokens);
    console.log("Final Tokens:", formattedTokens);
    console.log("Latency:", totalTime, "ms");

    res.json({
      success: true,
      answer: finalResponse,

      metrics: {
        optimized,
        contextTokens,
        summaryTokens,
        finalTokens: formattedTokens,
        latencyMs: totalTime,
      },
    });
  } catch (err) {
    console.error("Pipeline Error:", err.message);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
