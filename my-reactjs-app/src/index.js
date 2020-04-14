const fetch = require('node-fetch');
const cheerio = require('cheerio');

const URL = 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Malaysia';

async function getFetchData() {
    const fetchData = await fetch(URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application-json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
    return cheerio.load(fetchData);
}

getFetchData()
    .then(result => console.log('result: ', result))
    .catch(error => console.log('error: ', error));