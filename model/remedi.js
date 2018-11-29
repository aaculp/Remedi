const db = require('../db/config');

const Remedi = {};

Remedi.findAll = () => {
  return db.query(`SELECT * FROM users`);
};

Remedi.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM users
    WHERE id = $1
  `,
    [id]
  );
};

Remedi.create = (users) => {
  return db.one(
    `
    INSERT INTO users
    (name, username, password, gluten, vegan, pescatarian, halal, keto, dairy, vegetarian, kosher, med, paleo)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *
  `,
    [users.name, users.username, users.password, users.gluten, users.vegan, users.pescatarian, users.halal, users.keto, users.dairy, users.vegetarian, users.kosher, users.med, users.paleo]
  );
};

Remedi.update = (users, id) => {
  return db.one(
    `
    UPDATE users SET
    gluten = $1,
    vegan = $2,
    pescatarian = $3,
    halal = $4,
    keto = $5,
    dairy = $6,
    vegetarian = $7,
    kosher = $8,
    med = $9,
    paleo = $10
    WHERE id = $11
    RETURNING *
  `,
    [users.gluten, users.vegan, users.pescatarian, users.halal, users.keto, users.dairy, users.vegetarian, users.kosher, users.med, users.paleo, id]
  );
};

Remedi.updateFeelings = (users, id) => {
  return db.one(
    `
    UPDATE feelings SET
      headache = $1
      fatigue = $2
      alert = $3
      anxious = $4
      bloated = $5
      stomacheache = $6
      lowEnergy = $7
      lethargic = $8
    WHERE id = $9
    RETURNING *
  `,
    [feelings.headache, feelings.fatigue, feelings.alert, feelings.anxious, feelings.bloated, feelings.stomacheache, feelings.lowEnergy, feelings.lethargic, id]
  );
};

Remedi.destroy = (id) => {
  return db.none(
    `
    DELETE FROM users
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Remedi;
