var quotes = [
  'hi',
  'bye'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quotedisplay").innerHTML = quotes[randomNumber]
}
