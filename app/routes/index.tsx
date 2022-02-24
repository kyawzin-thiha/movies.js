import { LoaderFunction, useLoaderData } from 'remix';
import BackDropCard from '~/components/backdrop';
import { GridContainer } from '~/components/grid/styled';
import PosterCard from '~/components/poster';
import { axiosClient, moviesType, apiKey } from '~/util/axios.server';

export const loader: LoaderFunction = async () => {
	try {
		const page1 = axiosClient.get(
			`/now_playing?api_key=${apiKey}&language=en-US&page=1`,
		);
		const page2 = axiosClient.get(
			`/now_playing?api_key=${apiKey}&language=en-US&page=2`,
		);
		const page3 = axiosClient.get(
			`/now_playing?api_key=${apiKey}&language=en-US&page=3`,
		);
		const [page1Data, page2Data, page3Data] = await Promise.all([
			page1,
			page2,
			page3,
		]);
		const data = [
			...page1Data.data.results,
			...page2Data.data.results,
			...page3Data.data.results,
		];
		return data;
	} catch (error) {
		throw new Error('Server Error');
	}
};

export default function Index() {
	const data = useLoaderData() as moviesType[];
	return (
		<div>
			<BackDropCard data={data[0]} />

			<GridContainer>
				{data.map((item) => (
					<PosterCard data={item} key={item.id} />
				))}
			</GridContainer>
		</div>
	);
}