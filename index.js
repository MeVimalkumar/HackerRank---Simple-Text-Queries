function textQueries(sentences, queries) {
    // Write your code here
    let arr = [];
    let queryIndex = 0;
    for (let query of queries) {
        arr[queryIndex] = [];
        const q = query.split(" ");
        let sentenceIndex = 0;
        for (let sentence of sentences) {
            const s = sentence.split(" ");
            if (containsAll(s, q)) {
                arr[queryIndex].push(sentenceIndex)
            }
            sentenceIndex += 1;
        }
        if (!arr[queryIndex].length) {
            arr[queryIndex].push(-1);
        }
        console.log(arr[queryIndex].join(" "));
        queryIndex += 1;
    }
}

function containsAll(s, q) {
    for (let item of q) {
        if (!s.includes(item)) {
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