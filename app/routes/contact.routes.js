const express = require("express");
const contacts = require("../controllers/controller");

module.exports = app => {
    const router = express.Router();

    router.post("/", contacts.create);

    router.get("/", contacts.findAll);

    router.get("/favorite", contacts.findAllFavortive);

    router.get("/:id", contacts.findOne);

    router.put("/:id", contacts.update);

    router.delete("/:id", contacts.delete);

    router.delete("/", contacts.deleteAll);

    router.use("/api/contacts", router);

};