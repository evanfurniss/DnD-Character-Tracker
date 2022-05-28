const express = require("express");
const { initializeApp, cert } = require('firebase-admin/app');
require("dotenv").config();

const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

initializeApp({
    credential: cert(serviceAccount)
});

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Redirects HTTP to HTTPS
if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https') {
            res.redirect(`https://${req.header('host')}${req.url}`);
        } else {
            next();
        };
    });
};

// Middleware
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
};

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});