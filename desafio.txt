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

	addMascota(mascota) {
		this.mascotas.push(mascota);
	}

	countMascotas() {
		return this.mascotas.length;
	}

	addBook(book, author) {
		const libros = {nombre: book, autor: author};

		this.libros.push(libros);
	}

	getBooksName() {
		let libros = this.libros;
		let booksName = [];

		for (const libro of libros) {
			booksName.push(libro.nombre);
		}

		return booksName.join(", ");
	}
}

let usuario = new Usuario("Diego", "Garcia");

console.log(`El nombre de usuario es ${usuario.getFullName()}.`);

usuario.addMascota("Perro");
console.log(`El usuario tiene ${usuario.countMascotas()} mascota.`);

usuario.addBook("Harry Potter: La piedra filosofal", "JK Rowling");
usuario.addBook("Harry Potter: El caliz de fuego", "JK Rowling");
console.log(`Los libros del usuario son ${usuario.getBooksName()}.`);
