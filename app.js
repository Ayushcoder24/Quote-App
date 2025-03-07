const quote = document.querySelector(".q");
const author = document.querySelector(".a")
const button = document.querySelector(".btn");

async function quoteFetch() {
    let response = await fetch("https://qapi.vercel.app/api/random");
    let data = await response.json();
    console.log(data.quote);
    quote.innerText = data.quote;
    author.innerText = data.author;
}



button.addEventListener("click" , quoteFetch);