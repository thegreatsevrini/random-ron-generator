//polyfill for element.matches()
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}


//grab button and empty blockquote
var moreRonBtn = document.querySelector('#btn');
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

//looks for click on the button
moreRonBtn.addEventListener('click', function(event) {
    //prints new Ron quote to page
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(function(response) {
        return response.json();
    }).then(function(data) {
        quote.textContent = data;
    }).catch(function(err) {
        console.log('There has been an error', err);
    });
}, false);