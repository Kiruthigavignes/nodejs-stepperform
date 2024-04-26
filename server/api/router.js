

const express = require("express");
const router = express.Router();
const { handleContact, handleDataRetrieval } = require("./controller");

router.post("/contact/:a", handleContact);

router.get("/contact/data", handleDataRetrieval);

module.exports = router;


