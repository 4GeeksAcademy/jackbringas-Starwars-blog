import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from "react";
import { Card } from "../components/Card.jsx";

export const Home = () => {

const {store, dispatch} =useGlobalReducer()


const getPeople = ()=>{

fetch("https://swapi.dev/api/people")
.then (res => res.json())
.then (data => dispatch({ type: "set-people", payload: data.results }))
.catch (err => console.error(err))
}

const getPlanets= ()=>{
fetch("https://swapi.dev/api/planets")
.then (res => res.json())
.then (data => dispatch({ type: "set-planets", payload: data.results }))
.catch (err => console.error(err))
}

const getVehicles= ()=>{
fetch("https://swapi.dev/api/vehicles")
.then (res => res.json())
.then (data => dispatch({ type: "set-vehicles", payload: data.results }))
.catch (err => console.error(err))
}

useEffect(() => {
	getPeople();
	getPlanets();
	getVehicles();
}, []); 


  return (

		<div className="text-center mt-5">
			<h1>People</h1>
			<div className= "row mb-3">
				{store.people?.map((item, index)=>{
					return(
						<div className= "col" key={index} >
							<Card item={item} position= {index}  category="people"/>
						</div>
						
					)
				})}
			</div>
			<h1>Planets</h1>
			<div className= "row mb-3">
				{store.planets?.map((item, index)=>{
					return(
						<div className= "col" key={index} ><Card item={item}  category="planets"/> </div>
					)
				})}
			</div>
			<h1>Vehicles</h1>
			<div className= "row mb-3">
				{store.vehicles?.map((item, index)=>{
					return(
						<div className= "col" key={index} ><Card item={item}  category="vehicles"/> </div>
					)
				})}
			</div>
				
		</div>
	);
}; 