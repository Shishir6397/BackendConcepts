const express = require('express');
const router = express.Router();
const db = require('../../configuration/sql'); // assuming your database connection file is named databaseConnection.js
const { getActorsList } = require('../services/actor');

router.get('/actors', getActorsList);

module.exports = router;
