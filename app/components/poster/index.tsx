import { Link } from 'remix';
import { Poster, PosterContainer } from './styled';

type props = {
	data: {
		poster_path: string;
		id: string;
	};
};

export default function PosterCard({ data }: props) {
	return (
		<Link to={`/movies/${data.id}`}>
			<PosterContainer>
				<Poster
					srcSet={`https://image.tmdb.org/t/p/w185/${data.poster_path} 660w, https://image.tmdb.org/t/p/original/${data.poster_path} 1024w`}
					sizes='(max-width: 660px) 660px, 1024px'
					src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
					alt=''
				/>
			</PosterContainer>
		</Link>
	);
}
