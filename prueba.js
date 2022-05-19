const form = document.getElementById("form");
const btn = document.getElementById("btn");
const btnSubmit = document.getElementById("btn-submit");
const select = document.getElementById("services");

btn.addEventListener("click", () => {
	select.value = "RRHH";
});

form.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(select.value);
});
