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
			if (respuesta.results) {
				this.todosLosDatos = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos2().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos2 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos3().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos3 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos4().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos4 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos5().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos5 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos6().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos6 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos7().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos7 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos8().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos8 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos9().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos9 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos10().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos10 = respuesta.results;
			} else {
			}
		});
		this.dataService.obtenerDatos11().subscribe((respuesta: any) => {
			if (respuesta.results) {
				this.todosLosDatos11 = respuesta.results;
			} else {
			}
		});
	}

	ngOnInit() {
		this.obtenerTodosLosDatos();
	}
}
