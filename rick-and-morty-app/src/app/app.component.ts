import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

//* linea agregada
import { DataService } from "./services/data.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css"
})
export class AppComponent {
	//* lineas agregadas
	dataService = inject(DataService);

	todosLosDatos: any[] = [];
	todosLosDatos2: any[] = [];
	todosLosDatos3: any[] = [];
	todosLosDatos4: any[] = [];
	todosLosDatos5: any[] = [];
	todosLosDatos6: any[] = [];
	todosLosDatos7: any[] = [];
	todosLosDatos8: any[] = [];
	todosLosDatos9: any[] = [];
	todosLosDatos10: any[] = [];
	todosLosDatos11: any[] = [];

	obtenerTodosLosDatos() {
		this.dataService.obtenerDatos1().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos2().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos2 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos3().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos3 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos4().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos4 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos5().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos5 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos6().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos6 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos7().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos7 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos8().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos8 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos9().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos9 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos10().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos10 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
		this.dataService.obtenerDatos11().subscribe((respuesta: any) => {
			console.log("respuesta: ", respuesta);
			if (respuesta.results) {
				this.todosLosDatos11 = respuesta.results;
				console.log("bien");
			} else {
				console.log("Error");
			}
		});
	}

	ngOnInit() {
		this.obtenerTodosLosDatos();
	}
}
