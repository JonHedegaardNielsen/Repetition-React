import './Card.css'


export const Card = ({ title, image, price, description, children }) => {
	return (
		<>
			<div className="card">
				<h1>{title}</h1>
				<img src={image}></img>
				<span>{price}</span>
				<p>{description}</p>
				{children}
			</div>
		</>
	)
}

