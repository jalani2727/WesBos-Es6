const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 2000);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
  reject(new Error('There was an error with the tweets'));
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const marketPromise = fetch('http://api.marketstack.com/v1/eod?access_key=86e5e079f620de16f31e8039c62c72d0&symbols=AAPL');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([marketPromise, streetCarsPromise])
  .then((responses) => Promise.all(responses.map((response) => response.json())))
  .then((responses) => {
    console.log(responses);
  });
