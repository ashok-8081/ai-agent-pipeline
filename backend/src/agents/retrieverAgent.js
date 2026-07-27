async function retrieverAgent(question) {
  console.log("retriever Agent Running....");

  const context = `
Docker is a containerization platform.
Kubernetes is an orchestration platform.
Docker packages applications.
Kubernetes manages containers at scale.
`;

  return context;
}

module.exports = retrieverAgent;
