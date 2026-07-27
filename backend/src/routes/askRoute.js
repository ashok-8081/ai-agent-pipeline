const express = require("express");
const estimateTokens = require("../utils/tokenCounter");

const retrieverAgent = require("../agents/retrieverAgent");
const summaryAgent = require("../agents/summaryAgent");
const formatterAgent = require("../agents/formatterAgent");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;
    const optimized = req.query.optimized !== "false";

    const requestStart = Date.now();

    console.log("Request received");

    // ================= RETRIEVER =================

    console.log("Starting Retriever...");
    const context = await retrieverAgent(question, optimized);
    console.log("Retriever completed");

    const contextTokens = estimateTokens(context);

    let processedText = context;
    let summaryTokens = contextTokens;

    // ================= SUMMARY =================

    if (optimized && contextTokens > 80) {
      console.log("Large context detected. Running Summary Agent...");

      processedText = await summaryAgent(context);

      if (!processedText) {
        throw new Error("Summary Agent returned empty output");
      }

      summaryTokens = estimateTokens(processedText);

      console.log("Summary completed");
    } else {
      console.log("Skipping Summary Agent (context already small)");
    }

    // ================= FORMATTER =================

    console.log("Starting Formatter...");

    const finalResponse = await formatterAgent(processedText);

    if (!finalResponse) {
      throw new Error("Formatter Agent returned empty output");
    }

    const finalTokens = estimateTokens(finalResponse);

    console.log("Formatter completed");

    const latency = Date.now() - requestStart;

    console.log("Context Tokens :", contextTokens);
    console.log("Summary Tokens:", summaryTokens);
    console.log("Final Tokens  :", finalTokens);

    res.json({
      success: true,
      answer: finalResponse,

      metrics: {
        optimized,
        contextTokens,
        summaryTokens,
        finalTokens,
        latencyMs: latency,
      },
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;