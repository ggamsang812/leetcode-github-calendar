// server.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.get('/github-contributions/:username', async (req, res) => {
  const { username } = req.params;
  const toDate = req.query.to;
  const url = toDate
    ? `https://github.com/users/${username}/contributions?to=${toDate}`
    : `https://github.com/users/${username}/contributions`;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from GitHub');
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
