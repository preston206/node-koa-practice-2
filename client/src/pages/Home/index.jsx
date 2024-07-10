import { useState, useEffect } from 'preact/hooks';
import preactLogo from '../../assets/preact.svg';
import './style.css';

export function Home() {
	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank">
				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
			</a>
			{/* <h1>Get Started building Vite-powered Preact Apps </h1> */}
			<ShowMessage />
			{/* <section>
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section> */}
		</div>
	);
}

// function Resource(props) {
// 	return (
// 		<a href={props.href} target="_blank" class="resource">
// 			<h2>{props.title}</h2>
// 			<p>{props.description}</p>
// 		</a>
// 	);
// }

const ShowMessage = () => {
	const [data, setData] = useState();

	useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setData(data.message))
			.catch(error => console.log('---ERROR', error));
  }, []);

	return (
		<div>
			<p>{!data ? "Loading......" : data}</p>
		</div>
	);
}