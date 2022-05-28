const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();

const charactersRef = db.collection("characters");

module.exports = {
    addCharacter: function(req, res) {

    },

    getCharacters: function(req, res) {
        
    }
};