"use strict";

const dolarFetch = fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		data.forEach((element) => {
			const { casa } = element;
			if (casa.compra === "No Cotiza" || casa.venta === "0") return;
			casa.variacion = (parseFloat(casa.venta) / parseFloat(casa.compra) - 1).toFixed(4) * 100;

			// Creating and inserting elements
			const card = document.createElement("div");
			const cardHTML = `		
            <div class="card bg-light mb-5" style="max-width: 28rem">
			<div class="card-header">Agencia: ${casa.agencia} | Moneda: ${casa.nombre}</div>
			<div class="card-body">
				<h5 class="card-title">Precio de compra: $${casa.compra}</h5>
				<p class="card-text">
				<h5 class="card-title">Precio de venta: $${casa.venta}</h5>
				<p class="card-text">
				<h5 class="card-title">Variacion del: ${casa.variacion}%</h5>
				<p class="card-text">
				</p>
			</div>
		    </div> `;

			card.innerHTML = cardHTML;

			document.body.appendChild(card);
		});
	})
	.catch(function (error) {
		console.log(`Hubo un problema con la petición Fetch: ${error.message}`);
	});
