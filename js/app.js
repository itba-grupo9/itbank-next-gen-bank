"use strict";

const dolarFetch = fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		data.forEach((element) => {
			const casaDeCambio = element.casa;

			console.log(
				`Agencia:${casaDeCambio.agencia}\nTipo de moneda: ${casaDeCambio.nombre}\nPrecio de compra: $${casaDeCambio.compra}\nPrecio de venta $${casaDeCambio.venta}`
			);

			// Modificar console log por elementos
			h1.innerHTML = "Hey";
		});
	})
	.catch(function (error) {
		console.log("Hubo un problema con la petición Fetch:" + error.message);
	});
