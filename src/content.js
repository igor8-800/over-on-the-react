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





class ContentTitle extends React.Component {
	render() {

		return (
			<div className="content__title">
				<p>Introducing Horror Fellow</p>
			</div>
		);

	}
};
class ContentText extends React.Component {
	render() {

		return (
			<div className="content__text">
				<p>SOLD OUT - 10,000 uniquely generated, cute and collectible pixel art souls with proof of ownership stored on the Solana blockchain.</p>
			</div>
		);

	}
};



class ContentButton extends React.Component {
	render() {
		return (

			<form action="" className="content__button">
				<button>Buy on DigitalEyes Marketplace</button>
			</form>


		)

	}
}


class ContentTextTwe extends React.Component {
	render() {

		return (
			<div className="content__text__twe">
				<p>Our mint is over,  our team is busy working on our roadmap.
					However, if you're looking to launch your own NFTs  join the Solana community - we can help</p>
			</div>
		);

	}
};

class ContentIMG extends React.Component {
	render() {

		return (
			<div className="content__IMG">
			</div>
		);

	}
};
class ContentBlock extends React.Component {
	render() {


		return (

			<div >
				<ContentTitle />
				<ContentText />
				<ContentButton />
				<ContentTextTwe />
			</div>


		)

	}
};
class ContentInfos extends React.Component {
	render() {


		return (

			<div className="content__infos">
				<ContentBlock />
				<ContentIMG />
			</div>


		)

	}
};

class ContenFull extends React.Component {
	render() {





		return (
			<div className="content__block">
				<NewsWindow />
				<ContentInfos />

			</div>
		)
	}
}

class Content extends React.Component {
	render() {





		return (
			<ContenFull />
		)
	}
}
export default Content;