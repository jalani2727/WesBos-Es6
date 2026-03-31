const apiKey = import.meta.env.VITE_MARKETSTACK_KEY;
console.log(apiKey)
const marketStackURL = `http://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=AAPL`;

// The following will create a cascade of ajax requests.

// The async library can handle creating cascades of ajax requests. This operation can also be done natively which is what this lesson aims to show using generators.

function ajax(url) {
    fetch(url).then((response) => response.json()).then(responseJSON => dataGen.next(responseJSON))
}

function* steps() {
    console.log('fetching Market Data');
    const marketData = yield ajax(marketStackURL); // The result of the yield will be placed into your marketData variable

    console.log(marketData);

    console.log('fetching jalani');
    const jalaniGithub = yield ajax('https://api.github.com/users/jalani2727'); // The result of the yield will be placed in your jalaniGithub variable
    console.log(jalaniGithub);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988'); // The result of the yield will be placed in your fatJoe variable.
    console.log(fatJoe);
}

const dataGen = steps();
dataGen.next();