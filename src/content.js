import React from 'react';
import "./content.css";





class NewsWindowText extends React.Component {
	render() {

		return (
			<div className="news__window__text">
				<p> First NFT collection with integrated Additional Reality</p>
			</div>
		);

	}
};



class NewsWindowButtom extends React.Component {
	render() {
		return (

			<form action="" className="news__window__buttom">
				<button>See Roadmap</button>
			</form>


		)

	}
}
class NewsWindow extends React.Component {
	render() {


		return (

			<div className="newsWindow">
				<NewsWindowText />
				<NewsWindowButtom />
			</div>


		)

	}
}

class Content extends React.Component {
	render() {





		return (
			<NewsWindow />
		)
	}
}
export default Content;