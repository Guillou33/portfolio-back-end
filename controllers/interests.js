const { getInterests, create, update, findOne, deleteOne } = require('../models/interest');

module.exports.handlePost = async (req, res) => {
    const {nomInteret, descriptifInteret} = req.body;
    const data = await create({ nomInteret, descriptifInteret });
    return res.status(201).send(data);
}
module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
}

module.exports.getInterests = async (req, res) => {
    const rawData = await getInterests();
    res.send(rawData.map((i) => ({
        idInteret: i.idInteret,
        nomInteret: i.nomInteret,
        descriptifInteret:  i.descriptifInteret,
      }))
    );
}
module.exports.update = async (req, res) => {
  const newAttributes = req.body;
  const data = await update( req.params.id, newAttributes);
  return res.status(201).send(data);
}

module.exports.delete = async (req, res) => {
  const data = await deleteOne( req.params.id );
  return res.status(201).send(data);
}