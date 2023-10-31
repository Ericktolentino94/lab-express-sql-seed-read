const db = require("../db/dbConfig.js");

const getAllReviews = async (song_id) => {
    try {
        const allReviews = await db.any("SELECT * FROM reviews WHERE bookmark_id=$1",
        song_id
        );
        return allReviews
    } catch(err) {
        return err
    }
}
const getOneReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview
    } catch (error){
        return error
    }
} 

module.exports = {
    getAllReviews,
    getOneReview
}