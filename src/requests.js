const API_KEY = 'a4cd2bcf4f489ab90bff3d9b5ee5c4df'

export default {
	fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`

}
 