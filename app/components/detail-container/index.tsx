import PosterCard from '../poster';
import {
	DetailContainer,
	MovieCreditCard,
	MovieCreditCarousel,
	MovieDetailContainer,
	MovieOverview,
	MovieOverviewContainer,
	MoviePoster,
	MovieTitle,
	MovieTrailerContainer,
	MovieVideosContainer,
	MovieVideoTitle,
	VideoPlayer,
	SimilarMovieContainer,
	SimilarMovieHeader,
	SimilarMovieCarousel,
} from './styled';
type props = {
	data: {
		detail: {
			original_title: string;
			poster_path: string;
			overview: string;
		};
		credits: {
			id: string;
			profile_path: string;
			name: string;
		}[];
		videos: {
			id: string;
			key: string;
			name: string;
			site: string;
		}[];
		similar: {
			id: string;
			poster_path: string;
		}[];
	};
};

export default function MovieDetailCard({ data }: props) {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 6,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 5,
		},
		mobile: {
			breakpoint: { max: 1024, min: 0 },
			items: 2,
		},
	};
	return (
		<DetailContainer>
			<MovieOverviewContainer>
				<MoviePoster
					src={`https://image.tmdb.org/t/p/original/${data.detail.poster_path}`}
				/>
				<MovieDetailContainer>
					<MovieTitle>{data.detail.original_title}</MovieTitle>
					<MovieOverview>{data.detail.overview}</MovieOverview>
					<MovieCreditCarousel
						showDots={false}
						arrows={false}
						ssr
						infinite={true}
						responsive={responsive}>
						{data.credits &&
							data.credits.map((actor) => (
								<MovieCreditCard
									key={actor.id}
									src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
									alt={actor.name}
								/>
							))}
					</MovieCreditCarousel>
				</MovieDetailContainer>
			</MovieOverviewContainer>
			<MovieVideosContainer>
				{data.videos &&
					data.videos.map((video) => {
						let url =
							video.site === 'YouTube'
								? `https://www.youtube.com/watch?v=${video.key}`
								: `https://vimeo.com/${video.key}`;
						return (
							<MovieTrailerContainer key={video.id}>
								<MovieVideoTitle>{video.name}</MovieVideoTitle>
								<VideoPlayer url={url} />
							</MovieTrailerContainer>
						);
					})}
			</MovieVideosContainer>
			<SimilarMovieContainer>
				<SimilarMovieHeader>Similar Movies</SimilarMovieHeader>
				<SimilarMovieCarousel
					showDots={false}
					arrows={false}
					ssr
					infinite={true}
					responsive={{
						...responsive,
						mobile: {
							breakpoint: { max: 1024, min: 0 },
							items: 3,
						},
					}}>
					{data.similar &&
						data.similar.map((movie) => (
							<PosterCard data={movie} key={movie.id} />
						))}
				</SimilarMovieCarousel>
			</SimilarMovieContainer>
		</DetailContainer>
	);
}
