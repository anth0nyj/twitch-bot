import fetch from 'node-fetch';

const dadJoke = async (message, client, channel) => {
  if(message === '!dadjoke') {
    try {
      let response = await fetch(`https://www.reddit.com/r/dadjokes/random.json`);
      let data = await response.json();

      const title = await data[0].data.children[0].data.title;
      const body = await data[0].data.children[0].data.selftext;
      
      client.say(channel, title + ' ' + body);
    } catch (error) {
      console.error(error);
      client.say(channel, `Whoops! This command done goofed. Try again later.`);
    }
  }
}

export default dadJoke;
