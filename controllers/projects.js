const { getProjects, create, update, findOne, deleteOne } = require('../models/project');

module.exports.handlePost = async (req, res) => {
    const {nomProjet, urlApp, descriptifProjet, idClient} = req.body;
    const data = await create({ nomProjet, urlApp, descriptifProjet, idClient });
    return res.status(201).send(data);
}

module.exports.findOne = async (req, res) => {
  res.send(await findOne(req.params.id));
}

module.exports.getProjects = async (req, res) => {
    const rawData = await getProjects();
    res.send(rawData.map((proj) => ({
        idProjet: proj.idProjet,
        nomProjet: proj.nomProjet,
        urlApp:  proj.urlApp,
        descriptifProjet:  proj.descriptifProjet,
        idClient: proj.idClient,
        nomSociete:  proj.nomSociete,
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