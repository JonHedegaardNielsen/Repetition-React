import logo from "./../../assets/react-logo.png"

export const Content = ({ paragraphOne, paragraphTwo, paragraphThree }) => {
	return (
		<>
			<img src={logo}></img>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
		</>
	);
}
