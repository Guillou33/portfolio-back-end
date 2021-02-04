const { verifyPassword, findByEmail, findOne } = require('../models/developper');

module.exports.findOne = async (req, res) => {
  res.send(await findOne(1));
}

module.exports.login = async (req, res) => {
  const dev = await findByEmail(req.body.loginAdmin, false);
  if (dev && (await verifyPassword(dev, req.body.passwordAdmin))) {
    res.sendStatus(200);
    // console.log(dev.idAdmin);
    // req.session.idAdmin = dev.idAdmin;
    // req.session.save((err) => {
    //   if (err) return res.sendStatus(500);
    //   return res.send(200);
    // });
  } else {
    res.sendStatus(401);
  }
};