Bitcoin Wallet Address & QR Code Generator (Node.js + Express)

This is a simple Node.js application that generates a Bitcoin wallet address using the [BlockCypher API] and returns a QR code that can be scanned to receive payments.

Features

-Generates a new Bitcoin wallet address

-Automatically generates a QR code link using Google Chart API

-Simple API endpoint using Express

Great for learning or small crypto projects

How to Use

1. Clone or download this repo

git clone https://github.com/iamlegendarium/crytocurrency-wallet-address.git
cd crytocurrency-wallet-address

2. Install dependencies

npm install

3. Run the app

node index.js

4. Open in browser or API tool

Visit:

http://localhost:3000/generate-btc-wallet

You’ll get a JSON response like this:

{
  "message": "Bitcoin wallet address generated successfully",
  "address": "bebwd272gbhwb2hg2giubkj2bkj",
  "qrCodeUrl": "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=bitcoin:1ExampleBitcoinAddress"
}

Tech Stack

-Node.js

-Express

-Axios

-BlockCypher API

-Google Chart API (for QR code)