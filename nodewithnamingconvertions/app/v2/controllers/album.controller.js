const mongoose = require('mongoose');
const AlbumModel = require('../models/album.model');


console.log("insert data")
exports.insertAlbum=function(req, res) {
   console.log("Inside post api testing");

    const albumdata = new AlbumModel({
        album: req.body.album,
        director: req.body.director,
        singer: req.body.singer,
        year: req.body.year,
        category: req.body.category,
        cast: req.body.cast
    })
    console.log(albumdata); 
    try {
        let albumlist =  albumdata.save();
        res.json({
            success: true,
            meassage: "album created successfully.",
            albumdata: albumlist
        })
    } catch (err) {
        res.send({
            success: false,
            message: "Something went wrong",
            error: err
        })
    }
}
//get all album list
exports.getAlbum = async (req, res) =>{
   try {
        const allData = await AlbumModel.find();
        return res.json(allData)
    }
    catch (err) {
        console.log(err.message)
    }
}
//get album based on id
exports.getAlbumid = async (req, res) =>{

    try {
        const Data = await AlbumModel.findById(req.params.id);
        return res.json(Data)
    }
    catch (err) {
        console.log(err.message)
    }
}
//delete album by Id
exports.removeAlbum = async (req, res) =>{
    try {
        const data = await AlbumModel.findByIdAndDelete(req.params.id)
        res.json(data)

    }
    catch (err) {
        res.send("error" + err)
    }
};
// update Album
exports.updateAlbum = async (req, res) =>{
    try {
        const id = req.params.id;
        const update = req.body;
        const option = { new: true };
        const result = await AlbumModel.findByIdAndUpdate(id, update, option)
        res.json(result);
        console.log(result)
    }
    catch (err) {
        res.send("error" + err)
    }
}
    
      

