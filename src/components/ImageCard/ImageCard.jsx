import './ImageCard.css'
export const ImageCard = ({ title, description, children }) => {
	return (
		<>
			<div className='border'>

				<h3 className='title'>{title}</h3>
				<p>{description}</p>
				{children}
			</div>
		</>
	)
}
