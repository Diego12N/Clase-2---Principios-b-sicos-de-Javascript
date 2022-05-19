class Usuario {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = [];
		this.mascotas = [];
	}

	getFullName() {
		return `${this.nombre} ${this.apellido}`;
	}

	addMascota(nombre, edad, ...arg) {
		//this.mascotas.push(arg);
		console.log(arg);
	}

	countMascotas() {
		return this.mascotas.length;
	}

	addBook(book, author) {
		const libros = {nombre: book, autor: author};

		this.libros.push(libros);
	}

	getBooksName() {
		return this.libros.map((libro) => {
			return libro.nombre;
		});
	}
}

let usuario = new Usuario("Diego", "Garcia");

console.log(`El nombre de usuario es ${usuario.getFullName()}.`);

usuario.addMascota("Perro", "Gato", "Loro", "Tigre");
console.log(`El usuario tiene ${usuario.countMascotas()} mascota.`);

usuario.addBook("Harry Potter: La piedra filosofal", "JK Rowling");
usuario.addBook("Harry Potter: El caliz de fuego", "JK Rowling");
console.log(usuario.getBooksName());
