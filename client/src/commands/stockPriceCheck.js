import fetch from 'node-fetch'

const stockPriceCheck = async (message, channel, client) => {
  let arg = message.split(/\s/);
  if(arg[0] === '!stockprice') {
    try {

      let response = await fetch(`https://cloud.iexapis.com/stable/stock/${arg[1].toLowerCase()}/quote?token=${process.env.IEX_TOKEN}`);
      let data = await response.json();
      let latestPrice = await data.latestPrice.toFixed(2);

      await client.say(channel, `The last available price for $${arg[1].toUpperCase()} is $${latestPrice}.`)

    } catch (error) {

      console.error(error);
      client.say(channel, `$${arg[1].toUpperCase()} is not a valid ticker symbol.`);

    }
  }
}

export default stockPriceCheck;
