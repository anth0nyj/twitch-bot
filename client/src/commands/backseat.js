const backseat = (message, client, channel) => {
  if (message === '!backseat') {
    let response = "Tin is playing this game for the first time. As such, please refrain from disclosing any spoilers, such as upcoming enemies/bosses, unless they explicitly ask for such information. Don't worry, they will ask. A lot."
    
    client.say(channel, response);
  };
}

export default backseat;
