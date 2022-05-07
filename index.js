//TIPOS DE FUNCIONES:

function getMovie(movie) {
	return movie;
}

const showMovie = (elem) => {
	console.log(elem);
};

//iffe (Obsoleto) (Funcion autoejecutable)
(() => {
	console.log("Hola");
})();

/* 
//Scope:
    Indica el ámbito o alcance actual de ejecución.

*/

//Clases

class Peliculas {
	constructor(name, year, duration) {
		this.name = name;
		this.year = year;
		this.duration = duration;
	}
}

const misPeliculas = [];

let IronMan = new Peliculas("IronMan", 2009, "180 minuts");
let SpiderMan = new Peliculas("Spiderman", 2006, "170 minuts");

misPeliculas.push(IronMan);
misPeliculas.push(SpiderMan);

console.log(misPeliculas);

/* const misPeliculas = [
	{
		nombre: "Los Vengadores",
		año: 2012,
		protagonistas: ["Capitan America", "IronMan", "Thor"],
	},
	{
		nombre: "IronMan",
		año: 2012,
		protagonistas: ["Capitan America", "IronMan", "Thor"],
	},
];

let movieName = [];

for (const pelicula of misPeliculas) {
	movieName.push(pelicula.nombre);
}

let peliculas = movieName.join(", ");

console.log(`Mis peliculas son ${peliculas}.`);
 */
