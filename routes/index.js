const developpersRoutes = require('./developpers');
const skillsRoutes = require('./skills');
const clientsRoutes = require('./clients');
const projectsRoutes = require('./projects');
const commentariesRoutes = require('./commentaries');

// eslint-disable-next-line
module.exports = (app) => {
  app.use('/developpers', developpersRoutes);
  app.use('/skills', skillsRoutes);
  app.use('/clients', clientsRoutes);
  app.use('/projects', projectsRoutes);
  app.use('/commentaries', commentariesRoutes);
};
