let quote = document.getElementById("quote");
let author = document.getElementById("author");
const apiUrl="https://api.quotable.io/quotes/random?tags=technology,famous-quotes";
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML=data[0].content;
    author.innerHTML=data[0].author;   
}
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "  by " + author.innerHTML,"Tweet Windom",
    "width=600, heigth=300");
}