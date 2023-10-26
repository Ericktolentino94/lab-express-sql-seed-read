const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs
    } catch(err) {
        return err
    }
}

const getOneSong = async (id) => {
    try{
        const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id)
        return oneSong
    } catch (error) {
            return error
    }
}

const createOneSong = async (song) => {
    try{
        const createdSong = await db.one("INSERT INTO songs (name, url, category, is_favorite) VALUES ($1, $2 , $3 , $4) RETURNING *", [songs.name, songs.url, songs.category, songs.is_favorite])
        return createdSong
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllSongs,
    getOneSong,
    createOneSong
}