import { NavItem } from './../nav/styled';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const DetailContainer = styled.div`
	position: relative;
	transform: translateY(-500px);
	width: 80%;
	height: auto;
	min-height: 100vh;
	margin: 0 auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 660px) {
		transform: translateY(-40px);
		width: 100%;
	}
`;

export const MovieOverviewContainer = styled.div`
	width: 100%;
	height: auto;
	margin: 5px 0;
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media screen and (max-width: 660px) {
		flex-direction: column;
	}
`;

export const MoviePoster = styled.img`
	width: 300px;
	height: 450px;
	border-radius: 10px;
	object-fit: cover;
	@media screen and (max-width: 660px) {
		width: 200px;
		height: 300px;
	}
`;

export const MovieDetailContainer = styled.div`
	width: 60%;
	height: auto;
	@media screen and (max-width: 660px) {
		margin-top: 10px;
		width: 100%;
	}
`;

export const MovieTitle = styled.div`
	width: 100%;
	height: auto;
	overflow-warp: break-word;
	font-size: 60px;
	font-weight: bolder;
	letter-spacing: 1px;
	font-family: 'Nunito', sans-serif;
	color: #f5f5f5;
	@media screen and (max-width: 660px) {
		font-size: 40px;
	}
	@media screen and (max-width: 325px) {
		font-size: 20px;
	}
`;

export const MovieOverview = styled.div`
	width: 100%;
	height: auto;
	overflow-warp: break-word;
	font-size: 16px;
	line-height: 1.5;
	letter-spacing: 1px;
	font-family: 'Roboto', sans-serif;
	color: #f5f5f5;
	@media screen and (max-width: 660px) {
		text-align: justify;
		font-size: 13px;
	}
	@media screen and (max-width: 325px) {
		font-size: 12px;
	}
`;

export const MovieCreditCarousel = styled(Carousel)`
	width: 100%;
	height: 195px;
	margin: 10px 0;
	padding: 5px;
	@media screen and (max-width: 660px) {
		width: 90%;
		margin: 15px auto;
	}
`;

export const MovieCreditCard = styled.img`
	width: 130px;
	height: 195px;
	margin: 0 3px;
	border-radius: 5px;
	object-fit: cover;
	color: white;
`;

export const MovieVideosContainer = styled.div`
	width: 100%;
	height: auto;
	padding: 5px;
	margin: 10px 0;
`;

export const MovieTrailerContainer = styled.div`
	width: 100%;
	height: auto;
	margin: 15px 0;
`;

export const MovieVideoTitle = styled.div`
	width: 100%;
	height: auto;
	text-align: left;
	padding: 5px 10px;
	font-size: 26px;
	font-weight: bolder;
	letter-spacing: 1px;
	font-family: 'Roboto', sans-serif;
	color: #fff;
	@media screen and (max-width: 660px) {
		font-size: 18px;
	}
	@media screen and (max-width: 325px) {
		font-size: 14px;
	}
`;

export const VideoPlayer = styled(ReactPlayer)`
	width: 100% !important;
	height: auto !important;
	aspect-ratio: 16/9 !important;
	border-radius: 10px;
`;

export const SimilarMovieContainer = styled.div`
	width: 100%;
	height: auto;
	margin: 10px 0;
`;

export const SimilarMovieCarousel = styled(Carousel)`
	width: 100%;
	height: 275px;
	margin: 10px 0;
	padding: 5px;
	@media screen and (max-width: 660px) {
		width: 90%;
		height: 155px;
		margin: 15px auto;
	}
`;

export const SimilarMovieHeader = styled.div`
	width: 100%;
	font-size: 35px;
	letter-spacing: 1px;
	font-weight: bold;
	color: #fff;
	font-family: 'Nunito', sans-serif;
	@media screen and (max-width: 660px) {
		font-size: 25px;
	}
`;
