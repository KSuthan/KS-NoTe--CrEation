// required modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const displayNotes = require('./db/db.json');

// Create server application at port 3001
const app = express();
const PORT = process.env.PORT || 3001;


// This is required for API calls!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use public folder
app.use(express.static('public'));