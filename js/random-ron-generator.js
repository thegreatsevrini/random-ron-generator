//grab button and empty blockquote
var moreRonBtn = document.querySelector('button');
var quote = document.querySelector('blockquote');
//listen for page to load and when it does, grab this api and print]out the quote that it generates to the page.
window.onload = (event) => {
    console.log('This shit is loaded!');
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response) {
        return response.json();
    }).then(function(data) {
        quote.textContent = data;
    }).catch(function(err) {
        console.log('There has been an error', err);
    });
};