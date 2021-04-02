const express = require('express');
const router = express.Router();

const Pronouns = require('../models/Pronouns');

router.get('/:username', async (req, res) => {
  try {
    const pronouns = await Pronouns.findOne({ username: req.params.username })
    ;
    res.json(pronouns);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPronouns = await new Pronouns(data);
    await newPronouns.save();
    res.json(newPronouns);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.put('/', async (req, res) => {
  const { username, pronouns } = req.body;

  const pronounsFields = {};

  if(username) pronounsFields.username = username;
  if(pronouns) pronounsFields.pronouns = pronouns;

  try {
    let pronouns = await Pronouns.findOne({ username });

    if(!pronouns) return res.status(404).json({ msg: 'User not found' });

    pronouns = await Pronouns.findOneAndUpdate(
      { username }, 
      { $set: pronounsFields }, 
      { new: true }
    );
    res.json(pronouns);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/', async (req, res) => {
  try {
    console.log(req.body);

    const { username } = req.body;

    console.log(username);

    let pronouns = await Pronouns.findOne({ username });

    if(!pronouns) return res.status(404).json({ msg: 'User not found' });

    await Pronouns.findOneAndDelete({ username });

    res.json({ msg: 'Pronouns removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
