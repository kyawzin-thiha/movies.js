import {
	BackDrop,
	BackDropButton,
	BackDropButtonImg,
	BackDropContainer,
	BackDropContent,
	BackDropOverlay,
	BackDropTitle,
} from './styled';
import ViewMoreSvg from '~/assets/view-more.svg';
import { Link } from 'remix';
type props = {
	data: {
		backdrop_path: string;
		title: string;
		id: string;
	};
	isIndex?: boolean;
};

export default function BackDropCard({ data, isIndex = true }: props) {
	return (
		<BackDropContainer>
			<BackDrop
				srcSet={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path} 660w, https://image.tmdb.org/t/p/original/${data.backdrop_path} 1024w`}
				sizes='(max-width: 660px) 660px, 1024px'
				src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
			/>
			<BackDropOverlay />
			{isIndex && (
				<BackDropContent>
					<BackDropTitle>{data.title}</BackDropTitle>
					<Link to={`/movies/${data.id}`}>
						<BackDropButton>
							View More
							<BackDropButtonImg src={ViewMoreSvg} />
						</BackDropButton>
					</Link>
				</BackDropContent>
			)}
		</BackDropContainer>
	);
}
