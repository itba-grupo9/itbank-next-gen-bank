// Variables
const iconoMenu = document.querySelector(".header__nav__iconoMenu");
const menu = document.querySelector(".header__nav__menu");
const descargarApp = document.querySelector("#menuDescargarApp");
const listaPreciosDolar = document.querySelector("#listaPreciosDolar");

// Funcion para cerrar el menu segun el elemento que se cliquee
const cerrarMenu = (elemento) => {
	elemento.addEventListener("click", () => {
		menu.classList.toggle("--menuVisible");
	});
};
cerrarMenu(iconoMenu);
cerrarMenu(descargarApp);


// Dolar API
const dolarFetch = fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then((res) => res.json()).then((data) => {
        document.querySelector("#dolar-api-spinner").remove()
		data.forEach((element) => {
			// API properties
			const { compra, venta, agencia, nombre, variacion } = element.casa;

			// Date Variables
			const date = new Date();
			const hora = date.getHours() + ":" + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
			const fecha = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

			listaPreciosDolar.innerHTML += `
           <div class="precioDolar__lista__card">
         <div class="precioDolar__lista__card__header">
           <img class="precioDolar__lista__card__header__icono" src="resources/img/icono-billete-dolar.svg"
             alt="icono billete dolar">
           <span class="precioDolar__lista__card__header__titulo">${nombre}</span>
         </div>
         <div class="precioDolar__lista__card__precios">
           <div class="precioDolar__lista__card__precios__compra">
             <span class="precioDolar__lista__card__precios__compra__texto">Compra</span>
             <span class="precioDolar__lista__card__precios__compra__precio">${
					compra === "No Cotiza" ? "No Cotiza" : "$" + compra
				}</span>
           </div>
           <div class="precioDolar__lista__card__precios__venta">
             <span class="precioDolar__lista__card__precios__venta__texto">Venta</span>
             <span class="precioDolar__lista__card__precios__venta__precio">${venta === "0" ? "-" : "$" + venta}</span>
           </div>
         </div>
         <div class="precioDolar__lista__card__variacion">
           ${
				variacion === "0"
					? ""
					: `<img class="precioDolar__lista__card__variacion__icono ${
							variacion.includes("-") ? "--iconoRojo" : "--iconoVerde"
					  }" src="resources/img/icono-triangulo-${variacion.includes("-") ? "abajo" : "arriba"}.svg"
             alt="icono triangulo ${variacion.includes("-") ? "abajo" : "arriba"}">`
			}
           <span class="precioDolar__lista__card__variacion__texto ${
				variacion === "0" ? "--textoGris" : variacion.includes("-") ? "--textoRojo" : "--textoVerde"
			}">Variacion: ${variacion}%</span>
         </div>
         <div class="precioDolar__lista__card__footer">
           <span class="precioDolar__lista__card__footer__texto">Actualizado: ${fecha} ${hora}</span>
         </div>`;
		});
	});
