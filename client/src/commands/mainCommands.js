import backseat from './backseat';
import byeLucas from './byeLucas';
import dadJoke from './dadJoke';
import donate from './donate';
import pronouns from './pronouns';
import stockPriceCheck from './stockPriceCheck';

const mainCommands = (client, channel, message, userstate, self) => {
  if (channel === client.opts.channels[0]) {
    backseat(message, client, channel);
  }
  if (channel === client.opts.channels[1]) {
    byeLucas(message, client, userstate, channel);
  }
  dadJoke(message, client, channel);
  donate(message, client, userstate, channel);
  pronouns(message, client, userstate, channel);
  stockPriceCheck(message, channel, client);
}

export default mainCommands;
