//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowerCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
	return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
	const symbols = "(){}[]=<>/,.!@#$%&*+-";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
	let password = "";
	const passwordlength = 10;

	const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

	for (let i = 0; i < passwordlength; i = i + generators.length) {
		generators.forEach(() => {
			const randomValue = generators[Math.floor(Math.random() * generators.length)]();

			password += randomValue;
		});
	}
	password = password.slice(0, passwordlength);

	generatePasswordElement.style.display = "block";
	generatePasswordElement.querySelector("h4").innerText = password;
};

// eventos
generatePasswordButton.addEventListener("click", () => {
	generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});
