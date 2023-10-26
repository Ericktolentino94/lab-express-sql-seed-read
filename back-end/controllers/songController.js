const express = require("express");
const { getAllSongs, getOneSong, createOneSong } = require("../queries/songs")
const { checkName, checkBoolean } = require ("../validations/checkSongs")
const songs = express.Router();

songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]){

        res.status(200).json({sucess:true, data: {payload: allSongs}})
    } else {
        res.status(500)
        .json({success: false, data: { error: "Server Error "}})
    }
});

songs.get("/:id", async (req, res) => {
    const { id } = req.params
    const oneSong = await getOneSong(id)
    if(oneSong) {
        res.json(oneSong)
    } else {
        res.status(404).json({error: "Song not found!"})
    }
});

songs.post("/", checkName, checkBoolean, async (req, res) => {
    try{
        const createdSong = await createOneSong(req.body)
        res.json(createOneSong)
    } catch (error) {
        res.status(400).json({error: "Creating song not successful"})
    }
})

module.exports = songs;