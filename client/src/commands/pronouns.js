const axios = require('axios');

const pronouns = async (message, client, userstate, channel) => {

  const getPronouns = async (target = userstate.username) => {
    try {
      const data = await axios.get(`http://localhost:5000/api/pronouns/${target}`);
      return data.data;
    } catch (err) {
      console.error(err.message);
    }
  }

  const setPronouns = async (target, args) => {
    try {
      const data = {
        username: target,
        pronouns: args[2]
      };
      const checkedUser = await getPronouns(target);
      let response;
      if(!checkedUser) {
        response = await axios.post(
          `http://localhost:5000/api/pronouns/`, 
          data, 
          { headers: { 'Content-Type': 'application/json' } }
        );
      } else {
        response = await axios.put(
          `http://localhost:5000/api/pronouns`,
          data,
          { headers: { 'Content-Type': 'application/json' } }
        );
      }
      return response.data;
    } catch (err) {
      console.error(err.message);
    }
  }

  const deletePronouns = async (target = userstate.username) => {
    try {
      const checkedUser = await getPronouns(target);
      console.log(checkedUser);
      let response;
      if(checkedUser) {
        const response = await axios.delete(`http://localhost:5000/api/pronouns`, { data: { username:  checkedUser.username }});
      }
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  }

  const args = message.split(' ');
  
  if(args[0].toLowerCase() === '!pronouns') {
    
    let target = '';
    if(!args[1] || args[1].toLowerCase() === 'set' || args[1].toLowerCase() === 'edit' || args[1].toLowerCase() === 'remove' || args[1].toLowerCase() === 'delete') {
      target = userstate.username;
    } else if(args[1].match(/^@\S+/)) {
      target = args[1].slice(1);
    } else if(args[1]) {
      target = args[1];
    }
    
    let replyData = {};

    if(args[1] && (args[1] === 'set' || args[1] === 'edit')) {
      replyData = await setPronouns(userstate.username.toLowerCase(), args);
    } else if(args[1] && (args[1] === 'remove' || args[1] === 'delete')) {
      replyData = await deletePronouns(target.toLowerCase());
    } else {
      replyData = await getPronouns(target.toLowerCase());
    }
    if(replyData) {
      client.say(channel, `${target}'s preferred pronouns are ${replyData.pronouns}.`);
    } else {
      client.say(channel, `${target} does not have their preferred pronouns set. They can do so by entering '!pronouns set [pronouns]'.`);
    }
  }
}

export default pronouns;
