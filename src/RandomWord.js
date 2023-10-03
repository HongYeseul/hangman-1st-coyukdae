var ENGLISH_WORDS = [
    "their",
    "would",
    "about",
    "there",
    "think",
    "which",
    "people",
    "could",
    "other",
    "these",
    "first",
    "apple"
];

function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
