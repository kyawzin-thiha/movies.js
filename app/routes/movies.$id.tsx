import { LoaderFunction, useLoaderData } from 'remix';
import BackDropCard from '~/components/backdrop';
import MovieDetailCard from '~/components/detail-container';
import ToolBar from '~/components/tool';
import { axiosClient, apiKey } from '~/util/axios.server';

export const loader: LoaderFunction = async ({ params }) => {
	try {
		const movieId = params.id;
		const movieDetail = axiosClient.get(
			`/${movieId}?api_key=${apiKey}&language=en-US`,
		);
		const movieCredits = axiosClient.get(
			`/${movieId}/credits?api_key=${apiKey}&language=en-US`,
		);
		const movieVideos = axiosClient.get(
			`/${movieId}/videos?api_key=${apiKey}&language=en-US`,
		);
		const similarMovies = axiosClient.get(
			`/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`,
		);
		const [detail, credits, videos, similar] = await Promise.all([
			movieDetail,
			movieCredits,
			movieVideos,
			similarMovies,
		]);
		if (!detail.data) {
			throw new Response("Can't find movie detail", {
				status: 404,
			});
		}
		const data = {
			detail: detail.data,
			credits: credits.data.cast,
			videos: videos.data.results,
			similar: similar.data.results,
		};
		return data;
	} catch (error) {
		throw new Error('Server Error');
	}
};

export default function MovieDetail() {
	const data = useLoaderData();
	if (!data) {
		return <div style={{ color: 'white' }}>error</div>;
	}
	return (
		<>
			<ToolBar data={data.detail} />
			<BackDropCard data={data.detail} isIndex={false} />
			<MovieDetailCard data={data} />
		</>
	);
}
