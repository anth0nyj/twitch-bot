const byeLucas = (message, client, userstate, channel) => {
  if((message.toLowerCase().includes('bye') || (message.toLowerCase().includes('good') && message.toLowerCase().includes('night'))) && userstate.username.toLowerCase() === 'lulu_645') {
    
    const replies = [
      "Okay, bye Lucas.",
      "Good night, Lucas.",
      "Take care, Lucas.",
      "Adios, Lucas",
      "Au revoir, Lucas.",
      "Have a good night, Lucas.",
      "Bye, Lucas.",
      "Night, Lucas.",
      "See you later, Lucas."
    ];
    const index = Math.floor((Math.random() * replies.length));

    client.say(channel, replies[index]);
  }
}

export default byeLucas;
