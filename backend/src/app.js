const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/nfts', async (req, res) => {
  try {
    const response = await axios.get('https://api.opensea.io/api/v1/assets', {
      params: {
        order_direction: 'desc',
        offset: 0,
        limit: 20,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching NFT data' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
