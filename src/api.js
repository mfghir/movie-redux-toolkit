const base_url = "https://imdb-api.com/en/API/";

const popular_movies = `MostPopularMovies/${process.env.REACT_APP_MOVIE_API}`;
const popular_tvs = `MostPopularTVs/${process.env.REACT_APP_MOVIE_API}`;
const upcoming = `ComingSoon/${process.env.REACT_APP_MOVIE_API}`;

const search = `Search/${process.env.REACT_APP_MOVIE_API}`;
const detail = `Title/${process.env.REACT_APP_MOVIE_API}`;

export const popularMoviesURL = () => `${base_url}${popular_movies}`;
export const populartvsURL = () => `${base_url}${popular_tvs}`;
export const upcomingURL = () => `${base_url}${upcoming}`;

export const searchURL = (expression) => `${base_url}${search}/${expression}`;
export const detailURL = (movie_id) =>
  `${base_url}${detail}/${movie_id}`;
