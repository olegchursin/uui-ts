import './App.css';

import {
    UuiBaseTheme, UuiButton, UuiDefaultTheme, UuiGlobalVariablesTheme, UuiInverseTheme
} from '@aonunited/react';

function App() {
	return (
		<>
			<UuiBaseTheme />
			<UuiDefaultTheme />
			<UuiGlobalVariablesTheme />
			<UuiInverseTheme />

			<div className="App">
				<h1>UUI TS</h1>

				<UuiButton>Hello there!</UuiButton>
			</div>
		</>
	);
}

export default App;
