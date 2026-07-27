const Groq = require("groq-sdk");

const qroq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function askLLM(prompt) {
  const response = await qroq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    message: [
      {
        role: "user",
        content: promp,
      },
    ],
    temperatur: 0.3,
  });

  return response.choices[0].message.content;
}

module.exports = askLLM;
