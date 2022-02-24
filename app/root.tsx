import {
	Links,
	LinksFunction,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	MetaFunction,
} from 'remix';
import { useLocation } from 'react-router-dom';
import GlobalCss from '~/css/global.css';
import NavBar from './components/nav';
import style from 'react-multi-carousel/lib/styles.css';
import { LottieFile, LottieFileContainer } from './components/error&404/styled';
import ErrorAnimation from '~/assets/error.json';
import NotFoundAnimation from '~/assets/404.json';

export const meta: MetaFunction = () => {
	return { title: 'Movies.js' };
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'stylesheet',
			href: GlobalCss,
		},
		{
			rel: 'stylesheet',
			href: style,
		},
	];
};

export default function App() {
	const location = useLocation();
	const indexLocation =
		location.pathname === '/' ||
		location.pathname === '/trending' ||
		location.pathname === '/upcoming';
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
				{typeof document === 'undefined' ? '__STYLES__' : null}
			</head>
			<body>
				{indexLocation && <NavBar />}
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' && <LiveReload />}
			</body>
		</html>
	);
}

export function ErrorBoundary() {
	return (
		<html>
			<head>
				<title>Internal Server Error</title>
				<Meta />
				<Links />
				{typeof document === 'undefined' ? '__STYLES__' : null}
			</head>
			<body>
				<LottieFileContainer>
					<LottieFile animationData={ErrorAnimation} />
				</LottieFileContainer>
				<Scripts />
			</body>
		</html>
	);
}

export function CatchBoundary() {
	return (
		<html>
			<head>
				<title>Oops!</title>
				<Meta />
				<Links />
				{typeof document === 'undefined' ? '__STYLES__' : null}
			</head>
			<body>
				<LottieFileContainer>
					<LottieFile animationData={NotFoundAnimation} />
				</LottieFileContainer>
				<Scripts />
			</body>
		</html>
	);
}
