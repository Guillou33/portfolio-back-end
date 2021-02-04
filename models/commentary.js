const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');
// const searchedAttributesToSqlSet = require('../helpers/searchedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Commentaire WHERE idCommentaire = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Commentaire', id);
    return null;
}

const getCommentaries = () => {
    return db.query(`Select * from Commentaire`);   
}
const create = (newAttributes) => {
    return db
      .query(
        `INSERT INTO Commentaire SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
}

const deleteOne = async(id) => {
    return db
        .query(`DELETE from Commentaire where idCommentaire=${id}`, id)
        .then(() => 'Supprimé');
}

module.exports = {
    deleteOne,
    getCommentaries,
    create
}