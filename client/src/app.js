import tmi from 'tmi.js'
import mainCommands from './commands/mainCommands'
require('dotenv').config()

const options = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: process.env.CHANNEL_NAMES.split(',')
}

const client = new tmi.Client(options);

client.connect();

client.on('message', async (channel, userstate, message, self) => {
  if(self) return;
  
  mainCommands(client, channel, message, userstate, self);
});
