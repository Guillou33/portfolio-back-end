const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');
// const searchedAttributesToSqlSet = require('../helpers/searchedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Interet WHERE idInteret = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Interet', id);
    return null;
}

const getInterests = () => {
    return db.query(`Select * from Interet`);
}

const create = (newAttributes) => {
    return db
      .query(
        `INSERT INTO Interet SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
}
const update = async(id, newAttributes) => {
    return db
      .query(
        `UPDATE Interet SET ${definedAttributesToSqlSet(newAttributes)} WHERE idInteret=${id}`,
        {...newAttributes, id}
      )
      .then(() => findOne(id));
}

const deleteOne = async(id) => {
    return db
        .query(`DELETE from Interet where idInteret=${id}`, id)
        .then(() => 'Supprimé');
}

module.exports = {
    create,
    getInterests,
    findOne,
    update,
    deleteOne
}