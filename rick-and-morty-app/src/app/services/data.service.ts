//* se agreha inject
import { Injectable, inject } from "@angular/core";
//* linea agregada
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class DataService {
	constructor() {}

	//* lineas agregadas
	//* url de mi api
	API_URL: string = "https://rickandmortyapi.com/api/character";

	httpClient = inject(HttpClient);

	obtenerDatos() {
		return this.httpClient.get(this.API_URL);
	}
}
