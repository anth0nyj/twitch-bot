const donate = (message, client, userstate, channel) => {
  if(message.toLowerCase() === '!dono' || message.toLowerCase() === '!donation') {
    const donation = (Math.random() * 1000000).toFixed(2);
    const streamer = channel.split('#')[1];
    const replies = [
      "Thanks, I guess?",
      "Nice.",
      "Aw, that's so kind.",
      "Holy moley! Thank you so much!"
    ];

    let option = 0;
    if(donation < 250000) {
      option = 0;
    } else if(donation < 500000) {
      option = 1;
    } else if(donation < 750000) {
      option = 2;
    } else {
      option = 3;
    }

    client.say(channel, `${userstate.username} has just donated $${donation} to ${streamer}. ${replies[option]}`)
  }
}

export default donate;
