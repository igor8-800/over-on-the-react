import React from 'react';
import "./header.css";

class HeaderLi extends React.Component {

	render() {

		return (
			<il className="header__litle">
				<a href="#" className="header__litle1">{this.props.liText}</a>
			</il>
		)
	}
}
class HeaderLiText extends React.Component {

	render() {

		return (

			<a href="#" className="header__text">Marketplace </a>

		)
	}
}
class Header extends React.Component {

	render() {
		// text menu array
		let headerbox = ["Home", "Fusion Preview", "Roadmap", "Rarity Ranking", "Attributes", "Attributes", "FAQ"];
		// new array
		let renderHeaderLi = [];
		//realization menu
		for (let i = 0; i < headerbox.length; i++) {
			renderHeaderLi.push(< HeaderLi liText={headerbox[i]} />)

		};



		return (
			<header className="header" >
				<ul className="header__list">
					{renderHeaderLi}
				</ul>
				<div >
					<HeaderLiText />
				</div>

			</header>

		);
	}
}

export default Header;
