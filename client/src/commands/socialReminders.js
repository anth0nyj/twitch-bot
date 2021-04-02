const socialReminders = (client, channels) => {
  const socials = [
    {
      channel: "#tinfoilcats",
      discord: "https://discord.gg/b9fs3uch2p",
      instagram: "https://www.instagram.com/tinfoilcats",
      twitter: "https://www.twitter.com/tinfoilcats"
    },
    {
      channel: "#rinium",
      discord: "https://discord.gg/k8VYEkmVFw",
      instagram: "http://instagram.com/riniumtv",
      tiktok: "http://tiktok.com/@rinirae",
      twitter: "http://twitter.com/riniumtv"
    }
  ];

  const channelLinks = socials.find(links => links.channel === channels);

  return setInterval(channels, 5000);

  // for (let link in socials.this[channel.slice(1)]) {
  //   console.log(`${link}: ${socials.this[channel.slice(1)][link]}`);
  // }
  // console.log(channel);
  // client.say(channel, )
}

export default socialReminders;
