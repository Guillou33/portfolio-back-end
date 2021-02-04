const { getCommentaries, create } = require('../models/commentary');

module.exports.handlePost = async (req, res) => {
    const {nomCompetence, niveau} = req.body;
    const data = await create({ nomCompetence, niveau });
    return res.status(201).send(data);
}

module.exports.getCommentaries = async (req, res) => {
    const rawData = await getCommentaries();
    res.send(rawData.map((s) => ({
        idCompetence: s.idCompetence,
        nomCompetence: s.nomCompetence,
        niveau:  s.niveau,
      }))
    );
}