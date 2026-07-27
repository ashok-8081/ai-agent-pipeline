async function summaryAgent(context) {
  console.log("Summary Agent Running...");

  return `
Docker creates containers.

Kubernetes manages containers.
`;
}

module.exports = summaryAgent;
