const { getCommentaries, create, deleteOne } = require('../models/commentary');

module.exports.handlePost = async (req, res) => {
    const {texteCommentaire, auteurCommentaire} = req.body;
    const data = await create({ texteCommentaire, auteurCommentaire});
    return res.status(201).send(data);
}

module.exports.getCommentaries = async (req, res) => {
    const rawData = await getCommentaries();
    res.send(rawData.map((comm) => ({
        idCommentaire: comm.idCommentaire,
        nomCommentaire: comm.nomCommentaire,
        auteurCommentaire:  comm.auteurCommentaire,
      }))
    );
}

module.exports.delete = async (req, res) => {
  const data = await deleteOne( req.params.id );
  return res.status(201).send(data);
}