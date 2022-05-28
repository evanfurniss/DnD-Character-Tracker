const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

router.route("/")
    .put(charactersController.addCharacter)
    .get(charactersController.getCharacters)

module.exports = router;