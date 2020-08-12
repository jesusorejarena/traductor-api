/* // Metodo 1

// Se inicia cuando la pagina se carga completamente
addEventListener('DOMContentLoaded', inicio, false);

// Lee los textarea
let translate_field = document.getElementById('translate_field');
let translateResult = document.querySelector('#transtate_div');

// Detecta cuando se esta escribiendo en el textarea y manda la información a la conexion
function inicio() {
	translate_field.addEventListener('keyup', (e) => {
		let inputText = e.path[0].value;
		conexion(inputText);
	});
}

// Detecta el cambio de idioma y lo retorna a la conexion
function cambioselect1() {
	return document.getElementById(`language1`).value;
}
function cambioselect2() {
	return document.getElementById(`language2`).value;
}

// Se comunica con la api y le envia los parametros que se han guardado anteriormente
async function conexion(inputText) {
	const translate = await axios(
		`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${cambioselect1()}|${cambioselect2()}`
	);

	// Error que se lanza cuando no hay nada escrito
	if (translate.data.responseStatus == 403) {
		translateResult.innerHTML = 'Escribe para traducir';
	} else {
		translateResult.innerHTML = translate.data.responseData.translatedText;
	}
} */

// Metodo 2

// Lee los textarea
let translate_field = document.getElementById('translate_field');
let translateResult = document.querySelector('#transtate_div');

// Detecta el cambio de idioma y lo retorna a la conexion
const cambioselect1 = () => {
	return document.getElementById(`language1`).value;
};
const cambioselect2 = () => {
	return document.getElementById(`language2`).value;
};

// Detecta cuando se esta escribiendo en el textarea
translate_field.addEventListener('keyup', async (e) => {
	let inputText = e.path[0].value;
	
	// Se comunica con la api y le envia los parametros que se han guardado anteriormente
	const translate = await axios(
		`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${cambioselect1()}|${cambioselect2()}`
	);

	// Error que se lanza cuando no hay nada escrito
	if (translate.data.responseStatus == 403) {
		translateResult.innerHTML = 'Escribe para traducir';
	} else {
		translateResult.innerHTML = translate.data.responseData.translatedText;
	}
});
