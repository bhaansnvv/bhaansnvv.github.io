var quote = [
    "Happy birthday to u",
    "Happy birthday to u 💖",
    "Happy birthday, happy birthday",
    "Happy birthday to u <3",
    "Chúc mừng sinh nhật Bhaan:)"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quotedisplay').innerHTML = quote[randomNumber];
}
