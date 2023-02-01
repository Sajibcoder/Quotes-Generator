const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
let realData = " ";


const getNewQuotes =() => {
    let randomNum = Math.floor(Math.random() * 10);
    quote.innerText = `${realData[randomNum].text}`;
    author.innerText = `${realData[randomNum].author}`;
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
       
    } catch (error) {}
};

btn.addEventListener("click", getNewQuotes);
getQuotes();
