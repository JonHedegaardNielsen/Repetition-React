import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import { Footer } from './components/Footer/Footer'
import { Notes } from './components/Notes/Notes'
import logo from './assets/react-logo.png'
import { ImageCard } from './components/ImageCard/ImageCard'
import { Image } from './components/Image/Image'
import { Card } from './components/Card/Card'
import { GridContainer } from './components/GridContainer/GridContainer'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>

			<GridContainer>

				<Card title='kort 1' image={logo} description='cool kort' price={212}>
					<button type='button'>
						knap 3
					</button>
				</Card>
				<Card title='kort 1' image={logo} description='cool kort' price={212}>
					<button type='button'>
						sadasda
					</button>
				</Card>
				<Card title='kort 1' image={logo} description='cool kort' price={212}>
					<button type='button'>
						sadasda
					</button>
				</Card>
				<Card title='kort 1' image={logo} description='cool kort' price={212}>
					<button type='button'>
						sadasda
					</button>
				</Card>
			</GridContainer>
			<Header title='Min Notes App' />
			<Content imagePath={logo} paragraphOne='det her min notes side'
				paragraphTwo='den blev lavet på en tirsdag'
				paragraphThree='den er mega fed of kan indeholde mange noter f.eks' />
			<ImageCard title='Notes' description='dette er appens logo'>
				<Image imagePath={logo} />
			</ImageCard>
			<Notes />
			<Footer mail='jon230706@gmail.com' phoneNumber='61 69 91 33' address='Godsbanen 17' />
		</>
	)
}

export default App
