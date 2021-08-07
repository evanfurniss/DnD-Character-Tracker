require("dotenv").congif();
const express = require("express");
const routes = require("./routes");
const app = express();
const firebase = require("firebase/app");
const admin = require("firebase-admin");
const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dnd-character-tracker-6b132-default-rtdb.firebaseio.com"
});