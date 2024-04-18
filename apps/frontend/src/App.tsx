import "@mantine/core/styles.css"
import './App.css';
import { MantineProvider } from '@mantine/core';
import { Auth } from './pages/Auth';
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<MantineProvider defaultColorScheme="dark">
			<AuthProvider>
				<Auth />
			</AuthProvider>
		</MantineProvider>
	)
}

export default App;
