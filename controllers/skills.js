const { getSkills, create, update, findOne, deleteOne } = require('../models/skill');

module.exports.handlePost = async (req, res) => {
    const {nomCompetence, niveau} = req.body;
    const data = await create({ nomCompetence, niveau });
    return res.status(201).send(data);
}
module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
}

module.exports.getSkills = async (req, res) => {
    const rawData = await getSkills();
    res.send(rawData.map((s) => ({
        idCompetence: s.idCompetence,
        nomCompetence: s.nomCompetence,
        niveau:  s.niveau,
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