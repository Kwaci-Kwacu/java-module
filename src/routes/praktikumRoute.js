const express = require('express')
const app = express()

app.use(express.json())

const praaktikumController = require("../controllers/praktikum-controlelrs")

app.get("/profil/:name/:age", praaktikumController.profil)
app.post("/profil", praaktikumController.profil)

app.post("/bujur_sangkar", praaktikumController.bujur_sangkar)

module.exports = app