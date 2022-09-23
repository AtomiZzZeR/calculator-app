import styled from 'styled-components';
import EThemeColors from '../../assets/colors/theme/ThemeColors';


const Wrapper = styled.button`
  width: 105px;
  height: 105px;
	font-weight: 600;
  font-size: 2.5em;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.primary};
  border: 3px solid ${EThemeColors.accent};
  border-radius: 20px;
	transition: 0.2s;

	&:hover {
		background-color: #333;
	}
`;

const StyledKeyItem = {
  Wrapper,
};

export default StyledKeyItem;
