const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSQLSet.js');
// const searchedAttributesToSqlSet = require('../helpers/searchedAttributesToSQLSet.js');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Projet WHERE idProjet = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Projet', id);
    return null;
}
const findOneByClient = async (nomSociete, failIfNotFound = true) => {
    const rows = await db.query(`SELECT idClient FROM Client WHERE nomSociete = ?`, [nomSociete]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Client', nomSociete);
    return null;
}

const getProjects = () => {
    return db.query(`Select p.*, c.nomSociete from Projet p LEFT JOIN Client c ON p.idClient = c.idClient`);
}


const create = (newAttributes) => {
    return db
      .query(
        `INSERT INTO Projet SET ${definedAttributesToSqlSet(newAttributes)}`,
        newAttributes
      )
      .then((res) => findOne(res.insertId));
}

const update = async(id, newAttributes) => {
    return db
      .query(
        `UPDATE Projet SET ${definedAttributesToSqlSet(newAttributes)} WHERE idProjet=${id}`,
        {...newAttributes, id}
      )
      .then(() => findOne(id));
}

const deleteOne = async(id) => {
    return db
        .query(`DELETE from Projet where idProjet=${id}`, id)
        .then(() => 'Supprimé');
}

module.exports = {
    create,
    getProjects,
    update,
    deleteOne,
    findOne,
    findOneByClient
}