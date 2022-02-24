import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie/',
});

export const apiKey = process.env.TMDB_API_KEY as string;

export type moviesType = {
	id: string;
	title: string;
	backdrop_path: string;
	poster_path: string;
};
