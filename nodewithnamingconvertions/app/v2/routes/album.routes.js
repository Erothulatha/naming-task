const albumController = require("../controllers/album.controller.js");

module.exports = function(app, router){


    app.route('/')
    .post(albumController.insertAlbum);

	app.route('/')
	.get(albumController.getAlbum);

    app.route('/:id')
	.get(albumController.getAlbumid);

	app.route('/:id')
	.delete(albumController.removeAlbum);

	app.route('/:id')
	.patch(albumController.updateAlbum);
 
	
    
};
