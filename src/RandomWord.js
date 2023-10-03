let ENGLISH_WORDS = [
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
    "apple",
    "first",
    "course",
    "database",
    "system",
    "interview",
    "binder",
    "usb",
    "codding",
    "love",
    "stand",
    "book",
    "snack",
    "stick",
    "ring",
    "comedy",
    "tissue",
    "law",
    "world"
];

function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
