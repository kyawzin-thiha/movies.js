import styled from 'styled-components';

export const BackDropContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	max-height: 100vh;
	overflow: hidden;
`;

export const BackDrop = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

export const BackDropOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		180deg,
		rgba(255, 254, 207, 1) 0%,
		rgba(0, 0, 0, 0) 0%,
		rgba(0, 0, 0, 0.5) 37%,
		rgba(0, 0, 0, 0.8) 66%,
		rgba(0, 0, 0, 1) 100%
	);
`;

export const BackDropContent = styled.div`
	position: absolute;
	top: 50%;
	left: 20%;
	transform: translate(-50%, -50%);
	width: 30%;
	height: auto;
	overflow-warp: break-word;
	text-align: left;
	@media screen and (max-width: 600px) {
		left: 35%;
		width: 60%;
	}
`;

export const BackDropTitle = styled.div`
	height: auto;
	margin: 10px 0;
	color: #f5f5f5;
	font-weight: bold;
	font-size: 40px;
	font-family: 'Nunito', sans-serif;
	letter-spacing: 1px;
	@media screen and (max-width: 600px) {
		font-size: 20px;
	}
	@media screen and (max-width: 325px) {
		font-size: 15px;
	}
`;

export const BackDropButton = styled.div`
	width: 35%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 5px 8px;
	margin: 10px 0;
	letter-spacing: 1px;
	text-align: center;
	font-size: 14px;
	font-weight: bold;
	border-radius: 10px;
	background-color: #f5f5f5;
	transition: all 200ms linear;
	&: hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
	@media screen and (max-width: 600px) {
		margin: 5px 0;
		width: 50%;
		padding: 6px 5px;
		border-radius: 7px;
		font-size: 9px;
	}
	@media screen and (max-width: 325px) {
		width: 70%;
	}
`;

export const BackDropButtonImg = styled.img`
	width: 25px;
	height: 25px;
	@media screen and (max-width: 600px) {
		width: 12px;
		height: 12px;
	}
`;
