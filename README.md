# **Steam Free Promotions**

A simple scraper to get the latest Steam Promotions.

## Installation

**`npm install steam-free-promotions`**

## **Usage**

```javascript
const { getFreePromotions } = require('steam-free-promotions');

getFreePromotions().then(games => {
    console.log(games);
});
```

**example response:**

```javascript
[
  {
    name: 'World of Warships — Long Live the King',
    link: 'https://store.steampowered.com/app/1954810',
    header: 'https://cdn.akamai.steamstatic.com/steam/apps/1954810/header.jpg',
    images: [
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_0d66b2da203d0529367cf800a42d873975033c3d.jpg?t=1658820619',
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_d3b35af62321619989ae9103daf756603ffb0651.jpg?t=1658820619',
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_2fadfe7c27d6de09b14d2cc6364259bf5b2416d9.jpg?t=1658820619',
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_527d41aae1e1496d0eab79a610b9c2b84984bf16.jpg?t=1658820619',
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_c3f96d650d6ef66628ba76bfee49ed8bb4a839a7.jpg?t=1658820619',
      'https://cdn.akamai.steamstatic.com/steam/apps/1954810/ss_9f1173d9f883e5459b8972b2aca93f60391c9ae6.jpg?t=1658820619'
    ]
  }
]
```
