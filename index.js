const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/generate-btc-wallet", async (req, res) => {
  try {
    const response = await axios.post('https://api.blockcypher.com/v1/btc/main/addrs');
    const address = response.data.address;

    const qrLink = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=bitcoin:${address}`;

    res.json({
      message: "Bitcoin wallet address generated successfully",
      address,
      qrCodeUrl: qrLink,
    });
  } catch (error) {
    console.error("Error generating address:", error.message);
    res.status(500).json({ error: "Failed to generate BTC address" });
  }
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
