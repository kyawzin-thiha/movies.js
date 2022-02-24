import { NavLink } from 'remix';
import styled from 'styled-components';

export const NavContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	z-index: 1000;
	background: rgba(48, 48, 48, 0.6);
	@media screen and (max-width: 600px) {
		justify-content: space-between;
		padding: 3px;
		height: 40px;
	}
	@media screen and (max-width: 325px) {
		height: 30px;
	}
`;

export const NavLogo = styled.img`
	width: auto;
	height: 25px;
	margin: 0 10px;
	@media screen and (max-width: 600px) {
		margin: 0 5px;
		height: 18px;
	}
	@media screen and (max-width: 325px) {
		height: 12px;
	}
`;

export const NavItemsContainer = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
`;

export const NavItem = styled(NavLink)`
	width: auto;
	height: auto;
	font-size: 14px;
	letter-spacing: 1px;
	color: #f5f5f5;
	font-family: 'Nunito', sans-serif;
	margin: 0 10px;
	@media screen and (max-width: 600px) {
		margin: 0 5px;
		font-size: 11px;
	}
	@media screen and (max-width: 325px) {
		font-size: 9px;
	}
`;
