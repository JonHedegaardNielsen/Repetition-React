import logo from "./../../assets/react-logo.png"
import './Content.css'

export const Content = ({ paragraphOne, paragraphTwo, paragraphThree }) => {
	return (
		<>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
		</>
	);
}
