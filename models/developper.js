const db = require('../db.js');
const { RecordNotFoundError } = require('../error-types');

const findOne = async (id, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Admin WHERE idAdmin = ?`, [id]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError('Admin', id);
    return null;
}

const verifyPassword = async (dev, passwordAdmin) => {
    return dev.passwordAdmin === passwordAdmin;
  };
  
  const findByEmail = async (loginAdmin, failIfNotFound = true) => {
    const rows = await db.query(`SELECT * FROM Admin WHERE loginAdmin = ?`, [loginAdmin]);
    if (rows.length) {
      return rows[0];
    }
    if (failIfNotFound) throw new RecordNotFoundError();
    return null;
  };
module.exports = {
    verifyPassword,
    findByEmail,
    findOne
}