"use strict";


const spinner = document.querySelector('#spinner')

const dolarFetch = fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
	.then((res) => res.json())
	.then((data) => {
		data.forEach((element) => {
            spinner.remove()
			const { casa } = element;
        //   ELiminando las casas que no operan
			if (casa.venta === "0") return;


			const cointainerEl = document.querySelector("#card-col");

			const html = `	<div class="col-xl-4 text-center">
			<div class="card mx-5 my-4 text-center" style="max-width: 34rem; ">
			<div class="card-header">Agencia: ${casa.agencia} | Moneda: ${casa.nombre}</div>
			<div class="card-body">
				<h5 class="card-title">Precio de compra: ${casa.compra !== "No Cotiza" ? "$"+casa.compra : "no cotiza"}</h5>
				<p class="card-text">
				<h5 class="card-title">Precio de venta: $${casa.venta}</h5>
				<p class="card-text">
				<h5 class="card-title">${casa.variacion ? "Variación: " + casa.variacion + "%" : "Variación no disponible"}</h5>
				<p class="card-text">
				</p>
			</div>
			</div>
			</div>`;

			cointainerEl.insertAdjacentHTML("afterend", html);
		});
	})
	.catch(function (error) {
		alert(`Hubo un problema con la petición Fetch: ${error.message}`);
	});
