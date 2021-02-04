const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');
// const searchedAttributesToSqlSet = require('../helpers/searchedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Competence WHERE idCompetence = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Competence', id);
    return null;
}

const getSkills = () => {
    return db.query(`Select * from Competence`);
}

const create = (newAttributes) => {
    return db
      .query(
        `INSERT INTO Competence SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
}

const update = async(id, newAttributes) => {
    return db
      .query(
        `UPDATE Competence SET ${definedAttributesToSqlSet(newAttributes)} WHERE idCompetence=${id}`,
        {...newAttributes, id}
      )
      .then(() => findOne(id));
}

const deleteOne = async(id) => {
    return db
        .query(`DELETE from Competence where idCompetence=${id}`, id)
        .then(() => 'Supprimé');
}

module.exports = {
    create,
    getSkills,
    findOne,
    update,
    deleteOne
}