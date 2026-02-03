import logo from "./../../assets/react-logo.png"

export const Content = ({ paragraphOne, paragraphTwo, paragraphThree, imagePath }) => {
	return (
		<>
			<img src={imagePath}></img>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
		</>
	);
}
