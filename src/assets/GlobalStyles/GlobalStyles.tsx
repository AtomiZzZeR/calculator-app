import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		height: 100%;
	}

	body {
		font-family: 'Rubik', sans-serif;
	}

	#root {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	input {
		border: none;

		&:focus {
			outline: none;
		}
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyles;
