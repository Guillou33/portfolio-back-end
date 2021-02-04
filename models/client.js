const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');
// const searchedAttributesToSqlSet = require('../helpers/searchedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Client WHERE idClient = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Client', id);
    return null;
}

const getClients = () => {
    return db.query(`Select * from Client`);
}

const create = (newAttributes) => {
    return db
      .query(
        `INSERT INTO Client SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
}
const update = async(id, newAttributes) => {
    return db
      .query(
        `UPDATE Client SET ${definedAttributesToSqlSet(newAttributes)} WHERE idClient=${id}`,
        {...newAttributes, id}
      )
      .then(() => findOne(id));
}

const deleteOne = async(id) => {
    return db
        .query(`DELETE from Client where idClient=${id}`, id)
        .then(() => 'Supprimé');
}

module.exports = {
    create,
    getClients,
    findOne,
    update,
    deleteOne
}