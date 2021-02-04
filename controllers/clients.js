const { getClients, create, update, findOne, deleteOne } = require('../models/client');

module.exports.handlePost = async (req, res) => {
    const {nomSociete,
      urlSociete,
      nomContact,
      mailContact} = req.body;
    const data = await create({ nomSociete,
      urlSociete,
      nomContact,
      mailContact });
    return res.status(201).send(data);
}

module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
}

module.exports.getClients = async (req, res) => {
    const rawData = await getClients();
    res.send(rawData.map((c) => ({
        idClient: c.idClient,
        nomSociete: c.nomSociete,
        urlSociete: c.urlSociete,
        nomContact: c.nomContact,
        mailContact: c.mailContact,
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