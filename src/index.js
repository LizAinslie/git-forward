const path = require('path');
const express = require('express');

const configPath = path.join(__dirname, '..', 'config.json');
const config = require(configPath);

const app = express();

const githubUser = config.githubUser || 'LizAinslie';
app.get('*', (req, res) => {
  const repoPath = req.url;
  res.set('location', `https://github.com/${githubUser}${repoPath}`);
  res.status(301).send();
});

if (process.env.NODE_ENV === 'development') {
  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
}

// vercel
module.exports = app;

