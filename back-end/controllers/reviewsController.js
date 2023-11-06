const express = require("express");

const reviews = express.Router({ mergeParams: true });
const { getOneSong } = require("../queries/songs")
const { 
    getAllReviews, 
    getOneReview,
    deleteReview, 
    createReview,
    updateReview
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
reviews.post("/", async (req, res)=> {
    try {
        const {song_id} = req.params
        const createdReview = await createReview(song_id ,req.body)
        res.json(createdReview);
    } catch(err) {
        res.json(err);
    }
})
reviews.delete("/:review_id", async (req, res) => {
    try{
        const {review_id} = req.params;
        const deletedReview = await deleteReview(review_id)

        if(deletedReview) {
            res.status(200).json({sucess:true, payload: {data:deletedReview}})
        } 
    } catch (err) {
        res.status(404).json("no review found")
    }
})

reviews.put("/:id", async (req, res) => {
    const { id, song_id } = req.params;
    const updatedReview = await updateReview ({song_id, id , ...req.body})
    if(updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json("REVIEW IS NOT HERE")
    }
})





module.exports = reviews;