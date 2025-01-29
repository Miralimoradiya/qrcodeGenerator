# QR Code Generator

This is a **QR Code Generator** web application built with **ReactJS**, **Node.js**, and **MongoDB**. It allows users to generate QR codes for any text or URL and save them in a database for future use.

## Features

- **Generate QR codes** from any text or URL.
- **Save generated QR codes** in a MongoDB database.
- **Backend API** built with Node.js and Express.
- **MongoDB** as the database to store QR codes.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **QR Code Generation**: `qrcode` Node.js package

## Getting Started

To run this project locally, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 14 or above)
- [MongoDB](https://www.mongodb.com/) (or use MongoDB Atlas for a cloud database)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator

2. **Install backend dependencies:**:
    ```bash
    cd server
    npm install
    
3. **Install frontend dependencies:**:
    ```bash
    cd client
    npm install

4. **Start the server:**:
    ```bash
    cd server
    npm start
    
5. **Start the client:**:
    ```bash
    cd client
    npm start


## Usage:
- 1.Enter any product name or URL in the id field and eneter any number in price field.
- 2.Click the "Generate QR Code" button to generate the QR code.
- 3.View the generated QR code on the screen.
- 4.Scan it with your pmobile phone and get that same data.
