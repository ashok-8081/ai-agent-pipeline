import React, { useState } from "react";
import "./App.css";
import api from "./services/api";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [metrics, setMetrices] = useState(null);
  const [loading, setLoading] = useState(false);
  const [optimized, setOptimized] = useState(true);

 const askAI = async () => {
  if (!question.trim()) return;

  console.log("Button clicked");
  console.log("Question:", question);

  try {
    setLoading(true);

    console.log("Sending request...");

    const response = await api.post(`/ask?optimized=${optimized}`, {
      question,
    });

    console.log("Response:", response.data);

    setAnswer(response.data.answer);
    setMetrices(response.data.metrics);

  } catch (err) {
    console.error(err);

    setAnswer("Something went wrong");
    setMetrices(null);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container">
      <h1>AI Agent Pipeline</h1>

      <textarea
        placeholder="Ask anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <div className="options">
        <label>
          <input
            type="checkbox"
            checked={optimized}
            onChange={() => setOptimized(!optimized)}
          />{" "}
          Optimization Enabled
        </label>

        <button onClick={askAI} disabled={loading}>
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {answer && (
        <div className="answer">
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      )}

      {metrics && (
        <div className="metrics">
          <h2>Metrics</h2>

          <p>Optimization: {metrics.optimized ? "Enabled" : "Disabled"}</p>

          <p>Context Tokens: {metrics.contextTokens}</p>

          <p>Summary Tokens: {metrics.summaryTokens}</p>

          <p>Final Tokens: {metrics.finalTokens}</p>

          <p>Latency: {metrics.latencyMs} ms</p>
        </div>
      )}
    </div>
  );
};

export default App;
