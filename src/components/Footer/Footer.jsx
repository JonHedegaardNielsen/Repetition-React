import './Footer.css'
export const Footer = ({ mail, phoneNumber, address }) => {
	return (
		<ul className='list'>
			<li className='mail'>mail: {mail}</li>
			<li className='phoneNumber'>tlf: {phoneNumber}</li>
			<li className='address'>addresse: {address}</li>
		</ul>
	)
}

