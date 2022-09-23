import styled from 'styled-components';
import EThemeColors from '../../assets/colors/theme/ThemeColors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 485px;
  height: 700px;
  background-color: ${EThemeColors.primary};
  border-radius: 30px;
`;

const BoxInput = styled.div`
  display: flex;
  align-items: center;
  height: 270px;
  padding: 0px 30px;
`;

const InputField = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 4.5em;
  font-family: 'Rubik', sans-serif;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.primary};
`;

const BoxKeys = styled.div`
  padding: 0px 0px 25px;
  display: flex;
  flex-wrap: wrap;
	justify-content: center;
  height: 100%;
`;

const StyledLayout = {
  Wrapper,
  BoxInput,
  InputField,
  BoxKeys,
};

export default StyledLayout;
