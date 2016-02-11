(function() {
	var app = angular.module('angularLibrary', [ 'book-directives' ]);

	app.controller('BookController', [ '$http', function($http){
		var booklist = this;

		booklist.books = [ ];

		$http.get ('/scripts/tutorials.json').success(function(data)){
			booklist.books = data;
		}
	});


});