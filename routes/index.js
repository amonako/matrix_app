var moviesJSON = require('../movies.json');


// home
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title : "Matrix Movies",
		movies : movies
	});
};

// movie_single
exports.movie_single = function(req, res) {

	var movie_number = req.params.movie_number;

	var movies = moviesJSON.movies;

	if (movie_number >= 1 && movie_number <= 3) {
		var movie = movies[movie_number - 1];

		var title = movie.title;

		var elenco = movie.elenco;

		res.render('movie_single', {
			movies : movies,
			title : title,
			movie : movie,
			elenco : elenco
		});
	} else {
		res.render('notFound', {
			movies : movies,
			title : "Essa página não pode ser encontrada."
		});
	}


};

// notFound
exports.notFound = function(req, res) {
	var movies = moviesJSON.movies;

	res.render('notFound', {
		movies : movies,
		title : "Essa página não pode ser encontrada."
	});
};