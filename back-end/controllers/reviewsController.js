const express = require("express");

const reviews = express.Router({ mergeParams: true });
const { getOneSong } = require("../queries/songs")
const { 
    getAllReviews, 
    getOneReview 
} = require("../queries/reviews")

reviews.get("/", async (req, res)=> {
    const { song_id } = req.params;
    try {
        const song = await getOneSong(song_id);
        const allReviews = await getAllReviews(song_id);
        res.json( { ...song,  allReviews } );
    } catch(err) {
        res.json(err)
    }
});


reviews.get("/:review_id", async (req, res) => {
    const { review_id, song_id } = req.params;
    try {
        const review = await getOneReview(review_id);
        const song = await getOneSong(song_id)
        if(review.id) {
            res.json({...song, review })
        }
    } catch(err) {
        res.json(err)
    }
})


module.exports = reviews;