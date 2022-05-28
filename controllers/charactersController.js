const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();

const charactersRef = db.collection("characters");

module.exports = {
    addCharacter: function(req, res) {
        try {
            const doc = await charactersRef.add(req.body);

            if (doc.exists) {
                res.json({added: true});
            } else {
                res.json({added: false});
            };
        } catch (err) {
            console.log(err);
            res.json({message: "Could not add Character"});
        };
    },

    getCharacters: function(req, res) {
        try {
            const doc = await charactersRef.get();

            if (doc.exists) {
                res.json(doc.data());
            } else {
                res.json({users: "none"});
            };
        } catch (err) {
            console.log(err);
            res.json({message: "Could not get Characters"});
        };
    }
};