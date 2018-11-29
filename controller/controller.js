const Remedi = require('../model/remedi');
const remediController = {};

remediController.index = (req, res) => {
  Remedi.findAll()
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

remediController.show = (req, res) => {
  Remedi.findById(req.params.id)
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

remediController.create = (req, res) => {
  Remedi.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    gluten: req.body.gluten,
    vegan: req.body.vegan,
    pescatarian: req.body.pescatarian,
    halal: req.body.halal,
    keto: req.body.keto,
    dairy: req.body.dairy,
    vegetarian: req.body.vegetarian,
    kosher: req.body.kosher,
    med: req.body.med,
    paleo: req.body.paleo,
  })
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

remediController.update = (req, res) => {
  Remedi.update(
    {
    gluten: req.body.gluten,
    vegan: req.body.vegan,
    pescatarian: req.body.pescatarian,
    halal: req.body.halal,
    keto: req.body.keto,
    dairy: req.body.dairy,
    vegetarian: req.body.vegetarian,
    kosher: req.body.kosher,
    med: req.body.med,
    paleo: req.body.paleo,
    },
    req.params.id,
  ).then(users => {
    res.json({
      message: 'ok',
      data: users,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

remediController.updateFeelings = (req, res) => {
  Remedi.updateFeelings(
    {
      foods_id: req.body.foods_id,
      headache: req.body.headache,
      fatigue: req.body.fatigue,
      alert: req.body.alert,
      anxious: req.body.anxious,
      bloated: req.body.bloated,
      stomacheache: req.body.stomacheache,
      lowEnergy: req.body.lowEnergy,
      lethargic: req.body.lethargic
    },
    req.params.id,
  ).then(feelings => {
    res.json({
      message: 'ok',
      data: feelings,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

remediController.destroy = (req, res) => {
  Remedi.destroy(req.params.id)
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = remediController;