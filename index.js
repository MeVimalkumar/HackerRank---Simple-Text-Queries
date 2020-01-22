function textQueries(sentences, queries) {
    // Write your code here
    for (let queryIndex = 0, queryLen = queries.length; queryIndex < queryLen; queryIndex++) {
        let output = [];
        const query = queries[queryIndex].split(" ");
        if (query.length > 10 || !query.length) {
            continue;
        }
        for (let sentenceIndex = 0, sentenceLen = sentences.length; sentenceIndex < sentenceLen; sentenceIndex++) {
            const sentence = sentences[sentenceIndex].split(" ");
            if (sentence.length <= 10 && sentence.length>0 && containsAll(sentence, query)) {
                output.push(sentenceIndex);
            }
        }
        if (!output.length) {
            output = [-1];
        }
        console.log(output.join(" "));
    }
}

function containsAll(sentence, query) {
    let queryLen = query.length;
    while (queryLen--) {
        if (!sentence.includes(query[queryLen])) {
            return false;
        }
    }
    return true;
}
const sentences = [
    "it go will away",
    "go do art",
    "what to will east"
]
const queries = [
    "it will",
    "go east will",
    "will"
]
textQueries(sentences, queries);