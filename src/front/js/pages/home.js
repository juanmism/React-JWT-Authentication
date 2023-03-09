import React from "react";

import foto1 from "../../img/foto1.jpg";

import "../../styles/home.css";

export const Home = () => {
	
	return (
	
		<div className="homebg text-center mt-5">	
			<h1 className="title">Welcome to the my first login and register!</h1>
			<h4> Press login to try, and We will see?</h4>
			<img className="monster-bg" src={foto1} alt="cute monster"/>			
		</div>
	);
};