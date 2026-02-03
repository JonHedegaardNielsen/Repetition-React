import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import { Notes } from './components/Notes/Notes'
import logo from './assets/react-logo.png'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header title='Min Notes App' />
			<Content imagePath={logo} paragraphOne='det her min notes side' paragraphTwo='den blev lavet på en tirsdag' paragraphThree='den er mega fed of kan indeholde mange noter f.eks' />
			<Notes />
			<Footer mail='jon230706@gmail.com' phoneNumber='61 69 91 33' address='Godsbanen 17' />
		</>
	)
}

export default App
