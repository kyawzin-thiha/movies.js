import { NavContainer, NavItem, NavItemsContainer, NavLogo } from './styled';
import Logo from '~/assets/Logo.svg';
export default function NavBar() {
	return (
		<NavContainer>
			<NavLogo src={Logo} />
			<NavItemsContainer>
				<NavItem to='/' end>
					Home
				</NavItem>
				<NavItem to='trending'>Trending</NavItem>
				<NavItem to='upcoming'>Upcoming</NavItem>
			</NavItemsContainer>
		</NavContainer>
	);
}
