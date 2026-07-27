let conversationSummary = "";

function getConversationSummary() {
    return conversationSummary;
}

function updateConversationSummary(summary) {
    conversationSummary = summary;
}

module.exports = {
    getConversationSummary,
    updateConversationSummary
};