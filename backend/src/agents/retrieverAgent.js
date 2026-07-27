const documents = require("../knowledge/docs");

async function retrieverAgent(question) {

    console.log("Retriever Agent Running...");

    const query = question.toLowerCase();

    let context = "";

    for(const doc of documents){

        if(query.includes(doc.topic)){

            context += doc.content + "\n";
        }

    }

    if(context===""){

        context = "No matching document found.";

    }

    return context;
}

module.exports = retrieverAgent;