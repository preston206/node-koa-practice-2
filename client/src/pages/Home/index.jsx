// @ts-nocheck
import { useState, useEffect } from 'preact/hooks';
import './style.css';

const AllTypesList = () => {
	const [dishes, setDishes] = useState();

	const handleClick = (type) => {
		fetch(`/api/allPublicMainDishes/${type}`)
			.then(response => response.json())
			.then(data => setDishes(data))
			.catch(error => console.log('---GET ALL TYPES ERROR', error));
	}

	return (
		<section>
			<div class="get-types-btn-container">
				<button type="button" onClick={() => handleClick("main")}>
					Get Mains
				</button>
				<button type="button" onClick={() => handleClick("side")}>
					Get Sides
				</button>
			</div>
			<ul>
				{dishes && dishes.map(dish => (
					<li>
						<p>Doc Type: {dish.docType}</p>
						<p>Dish Type: {dish.type}</p>
						<p>Dish Name: {dish.name}</p>
						<p>Author: {dish.authorName}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

const ShowMeal = ({ mongoData }) => {
	return (
		<section>
			{mongoData && 
			<>
				<p>Doc Type: {mongoData.docType}</p>
				<p>Dish Type: {mongoData.type}</p>
				<p>Created: {mongoData.createdAt}</p>
				<p>Private?: {mongoData.isPrivate}</p>
				<p>Author ID: {mongoData.authorId}</p>
				<p>Author Name: {mongoData.authorName}</p>
				<p>Dish Name: {mongoData.name}</p>
				<p>Description: {mongoData.description}</p>
				<p>Ingredients: {mongoData.ingredients}</p>
				<p>Instructions: {mongoData.instructions}</p>
				<p>Notes: {mongoData.notes}</p>
			</>
			}
		</section>
	);
}

const MealForm = ({ setMongoData }) => {
	const handleSubmit = event => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const rando = Math.floor(Math.random() * 9999999);

		formData.append("is_private", "true");
		formData.append("account_id", rando.toString());
		formData.append("account_name", "Homer Simpson");

		const formEntries = Object.fromEntries(formData.entries());

		console.log("---FE FORM ENTRIES", formEntries);

		const postOptions = {
			method: "POST",
			body: JSON.stringify(formEntries)
		}

		fetch('/api/dish', postOptions)
			.then(response => response.json())
			.then(json => {
				console.log('---FE POST JSON:', json);
				return json;
			})
			.then(data => {

				// const getOptions = {
				// 	method: "GET",
				// 	body: JSON.stringify(formEntries)
				// }

				console.log('---FE DATA MEAL ID', data);

				fetch(`/api/dishById/${data.mealId}`)
					.then((response) => {
						console.log('---FE GET BY ID RESPONSE', response);
						return response.json();
					})
					.then((data) => {
						console.log('---FE GET BY ID DATA', data);
						setMongoData(data);
					})
					.catch(error => console.log('---FE GET ERROR 2', error));

			})
			.catch(error => console.log('---FE POST ERROR:', error));
	}

	return (
		<section>
			<form id="meal_form" action="" onSubmit={handleSubmit}>
				<p>Dish Info:</p>
				<div>
					<p class="type-label">Type:</p>
					<label htmlFor="">Main</label>
					<input required type="radio" name="dish_type" value="main" />
					<label htmlFor="">Side</label>
					<input required type="radio" name="dish_type" value="side" />
				</div>

				<div>
					<label class="label" htmlFor="">Name</label>
					<input type="text" name="dish_name" id="" />
				</div>
				
				<div>
					<label class="label" htmlFor="">Description</label>
					<textarea name="description" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Ingredients</label>
					<textarea name="ingredients" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Instructions</label>
					<textarea name="instructions" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Notes</label>
					<textarea name="notes" id=""></textarea>
				</div>

				<button>Submit</button>
			</form>
		</section>
	)
}

export function Home() {

	const [mongoData, setMongoData] = useState();

	useEffect(() => {
		fetch("/api/test")
      .then((response) => {
				console.log('---FE GET RESPONSE', response);
				return response.json();
			})
      .then((data) => {
				console.log('---FE GET DATA', data);
				setMongoData(data);
			})
			.catch(error => console.log('---FE GET ERROR 1', error));
  }, []);

	return (
		<div class="home">
			<AllTypesList />
			<MealForm setMongoData={setMongoData} />
			<ShowMeal mongoData={mongoData} />
		</div>
	);
}