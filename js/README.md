price_data.json was obtained by calling the following GET endpoint https://api.kite.ly/v4.0/template/?limit=125
with the correct Authorization header

then doing the following processing:
```js
_ = require('lodash')
// Save in products_prices.json
prices = fs.readFileSync('./products_prices.json', 'utf8');
pricesObj = JSON.parse(prices);

// Map template_id to USD prices
prices = {}
pricesObj.objects.forEach(item => {
    prices[item.template_id] = _.find(item.cost, {'currency': 'USD'})
});

// write file
fs.writeFileSync('./price_data.json', JSON.stringify(prices), 'utf8')
```