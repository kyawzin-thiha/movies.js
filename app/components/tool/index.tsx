import { BackButton, Title, ToolBarContainer } from './styled';
import BackSvg from '~/assets/back.svg';
import { useNavigate } from 'react-router-dom';

type props = {
	data: {
		title: string;
	};
};

export default function ToolBar({ data }: props) {
	const navigator = useNavigate();
	return (
		<ToolBarContainer>
			<BackButton src={BackSvg} onClick={() => navigator(-1)} />
			<Title>{data.title}</Title>
		</ToolBarContainer>
	);
}
