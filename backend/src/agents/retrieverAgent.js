const documents = require("../knowledge/docs");

async function retrieverAgent(question, optimized = true) {

    console.log("Retriever Agent Running...");

    if (!optimized) {

        console.log("Running Expensive Pipeline...");

        return documents.map(doc => doc.content).join("\n");

    }

    const query = question.toLowerCase();

    let context = "";

    for (const doc of documents) {

        if (query.includes(doc.topic)) {

            context += doc.content + "\n";

        }

    }

    if (context === "") {

        context = "No matching document found.";

    }

    return context;

}

module.exports = retrieverAgent;