const app = require('express')();

const githubUser = process.env.GITHUB_USER;
app.get('*', (req, res) => {
  const repoPath = req.url;
  res.set('location', `https://github.com/${githubUser}${repoPath}`);
  res.status(301).send();
});

// vercel
module.exports = app;

