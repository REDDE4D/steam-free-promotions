const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const cheerio = require('cheerio');

async function getFreePromotions() {
    const promos = await fetch('https://store.steampowered.com/search/?maxprice=free&specials=1');
    const pHtml = await promos.text();
    const $ = cheerio.load(pHtml);
    let games = await getGames();
    let freeGames = [];

    for (let game of games) {
        let gameName = game.title;
        let gameLink = game.link;
        let gameHeader = game.header_img;3
        let gameImages = await getImages(game.appid);

        freeGames.push({
            name: gameName,
            link: gameLink,
            header: gameHeader,
            images: gameImages
        });
    }

    return freeGames;
}

async function getImages(appid) {
    const gamePage = await fetch(`https://store.steampowered.com/app/${appid}`);
    const gHtml = await gamePage.text();
    const $ = cheerio.load(gHtml);
    let gameImages = [];
    $('#highlight_strip').find('.highlight_strip_screenshot').each((i, el) => {
        let smallImg = $(el).find('img').attr('src')
        let img = smallImg.replace('.116x65', '')
        gameImages.push(img)
    });

    return gameImages;
}

async function getGames() {
    const promos = await fetch('https://store.steampowered.com/search/?maxprice=free&specials=1');
    const pHtml = await promos.text();
    const $ = cheerio.load(pHtml);
    let games = [];
    $('#search_resultsRows').each((i, el) => {
        let game = {};
        let appid = $(el).find('.search_result_row').attr('href').split('/')[4]
        let title = $(el).find('.title').text();
        let link = `https://store.steampowered.com/app/${appid}`;
        let header_img = `https://cdn.akamai.steamstatic.com/steam/apps/${appid}/header.jpg`;
        game.title = title
        game.appid = appid
        game.link = link
        game.header_img = header_img
        games.push(game)
    });

    return games;
}


module.exports = {
    getFreePromotions
}