const express = require("express");
const { getAllSongs, getOneSong, createOneSong, deleteSong, updateSong } = require("../queries/songs")
const reviewsController = require("./reviewsController")
const { checkName, checkBoolean } = require ("../validations/checkSongs")
const songs = express.Router();

songs.use("/:song_id/reviews", reviewsController)
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
        res.json(createdSong)
    } catch (error) {
        res.status(400).json({error: "Creating song not successful"})
    }
})
 songs.delete("/:id", (req, res) => {
    const { id } = req.params
    const deletedSong = deleteSong(id)
    if(deletedSong) {

        res.status(200).json({success: true, payload: {data: deletedSong}})
    } else {
        res.status(404).json("song not found -uh oh")
    }
 })

 songs.put("/:id", async (req, res) => {
    const {id} = req.params;
    const updatedSong = await updateSong(id, req.body)
    if(updatedSong.id){
    res.status(200).json(updatedSong);
    } else {
        res.status(404).json("no song found with that id")
    }
 })


module.exports = songs;