function estimateTokens(text) {

    if(!text)
        return 0;

    return Math.ceil(text.split(/\s+/).length * 1.3);

}

module.exports = estimateTokens;