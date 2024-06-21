import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const[colorSeleccion, setColorSeleccion] = useState('red');

	return (
		<div className="container">
			<div className="semaforo align-items-center mx-auto">
				<div id="red-color-light" className={"luz red" + (colorSeleccion === "red" ? " brillo-red" : "")} onClick={()=>setColorSeleccion('red')}></div>
				<div id="yellow-color-light" className={"luz yellow" + (colorSeleccion === "yellow" ? " brillo-yellow" : "")} onClick={()=>setColorSeleccion('yellow')}></div>
				<div id="green-color-light" className={"luz green" + (colorSeleccion === "green" ? " brillo-green" : "")} onClick={()=>setColorSeleccion('green')}></div>
			</div>
		</div>
	);
};

export default Home;