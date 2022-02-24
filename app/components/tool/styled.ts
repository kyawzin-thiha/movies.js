import styled from 'styled-components';

export const ToolBarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: rgba(48, 48, 48, 0.6);
	z-index: 1000;
	@media screen and (max-width: 600px) {
		padding: 3px;
		height: 40px;
	}
	@media screen and (max-width: 325px) {
		height: 30px;
	}
`;

export const BackButton = styled.img`
	width: 40px;
	height: 40px;
	margin: 0 10px;
	cursor: pointer;
	@media screen and (max-width: 600px) {
		margin: 0 5px;
		width: 30px;
		height: 30px;
	}
	@media screen and (max-width: 325px) {
		width: 20px;
		height: 20px;
	}
`;

export const Title = styled.div`
margin: 0 10px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ececec;
    	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
	@media screen and (max-width: 325px) {
        font-size: 12px;
`;
