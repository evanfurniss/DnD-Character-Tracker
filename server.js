const { initializeApp, cert } = require('firebase-admin/app');
const express = require("express");

require("dotenv").config();

const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

initializeApp({
    credential: cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
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
    app.use(express.static('client/build',{
        etag: true,
        lastModified: true,
        setHeaders: (res, path) => {
            if (path.endsWith('.html')) {
                res.setHeader('Cache-Control', 'no-cache');
            } else if (path.endsWith('.jpg')) {
                res.setHeader('Cache-Control', 'max-age=31536000');
            };
        }
    }));
};

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});