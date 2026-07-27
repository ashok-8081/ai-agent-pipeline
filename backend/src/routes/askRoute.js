const express = require("express");

const retrieverAgent = require("../agents/retrieverAgent");
const summaryAgent = require("../agents/summaryAgent");
const formaterAgent = require("../agents/formatterAgent");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { question } = req.body;

    const context = await retrieverAgent(question);

    const summary = await summaryAgent(context);

    const finalResponse = await formaterAgent(summary);

    res.json({
      success: true,
      answer: finalResponse,
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