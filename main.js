let dumpButton = document.querySelector('.new-quote');


dumpButton.addEventListener('click', getQuote);


let endpoint = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuoteFromFaction/1';


function getQuote()
{
    // get the data from api
    fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        displayQuote(data.starWarsQuote);
    })
    .catch(() => {
        console.log("An error ocurred");
    });
}

function displayQuote(quote)
{
    let quoteTxt = document.querySelector('.quote-text');

    quote = quote.split(quote.match(/[^A-Za-z',.\s!?…’]/i))[0];

    quoteTxt.textContent = quote;
}


getQuote();