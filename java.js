


const input = document.getElementById ("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
   const reverse = reverseString (value)

   if (value === reverse) {
    alert("This is a Palindrome")
   } else {
    alert("This is NOT a Palindrome!")
   }
   input.value = ""
}
const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.", 
"Never put a sock in a toaster",
"I'm Batman",
"We haven't got a plan so nothing can go wrong!",
"Chopsticks are one of the reasons the Chinese never invented custard."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")
function padStart(value) {
    return String(value).padStart(2,"0")
}
function setTime(){
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}
function timer(){
    secondsElapsed++;
    setTime()
}

function startClock(){
    if (interval) stopClock()
interval = setInterval(timer, 1000)
}
function stopClock(){
clearInterval(interval)
}
function resetClock(){
stopClock()
secondsElapsed = 0;
setTime()
}