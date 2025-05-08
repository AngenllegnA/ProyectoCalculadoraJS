document.addEventListener('DOMContentLoaded', () => {

	const resultado = document.querySelector('#resultado') //crear variable para almacenar resultado usamos el id del h1
	const btn_suma = document.querySelector("#sumar") //crear otra variable donde tendremos el boton usamos el id del boton
	const btn_resta = document.querySelector("#restar")
	const btn_multiplicacion = document.querySelector("#multiplicar")
	const btn_division = document.querySelector("#dividir")
	const btn_potencia = document.querySelector("#potencia")
	const btn_porciento = document.querySelector("#porciento")

	//suma
	btn_suma.addEventListener("click", () => { //se indica que cuando se haga click al boton realize la suma

		const num1 = parseFloat(document.querySelector("#numero1").value) //crear varibles para almacenar los numeros
		const num2 = parseFloat(document.querySelector("#numero2").value)
		const suma = num1 + num2 //realizar la suma

		resultado.textContent = `${suma}` //con textcontent almacenamos la suma y la imprimimos

	})

	//resta
	btn_resta.addEventListener("click", () => { 

		const num1 = parseFloat(document.querySelector("#numero1").value)
		const num2 = parseFloat(document.querySelector("#numero2").value)
		const resta = num1 - num2

		resultado.textContent = `${resta}` 

	})

	//multiplicación
	btn_multiplicacion.addEventListener("click", () => {

		const num1 = parseFloat(document.querySelector("#numero1").value)
		const num2 = parseFloat(document.querySelector("#numero2").value)
		const multiplicacion = num1 * num2

		resultado.textContent = `${multiplicacion}`

	})

	//division
	btn_division.addEventListener("click", () => {

		const num1 = parseFloat(document.querySelector("#numero1").value)
		const num2 = parseFloat(document.querySelector("#numero2").value)
		const division = num1 / num2

		//condicional cuando el divisor sea igual a 0
		if (num2 != 0) {

		resultado.textContent = `${division}`

		}else{

			resultado.textContent = `Syntax error`

		}

	})

	//potencia
	btn_potencia.addEventListener("click", () => {

		const num1 = parseFloat(document.querySelector("#numero1").value)
		const num2 = parseFloat(document.querySelector("#numero2").value)
		const potencia = num1 ** num2

		resultado.textContent = `${potencia}`

	})

	//porcentaje
	btn_porciento.addEventListener("click", () => {

		const num = parseFloat(document.querySelector("#numero1").value)
		const porciento = parseFloat(document.querySelector("#numero2").value)
		const porcentaje = (num * porciento)/100

		resultado.textContent = `${porcentaje}`

	})
})
