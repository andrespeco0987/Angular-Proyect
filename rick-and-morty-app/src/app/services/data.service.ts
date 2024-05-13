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
	API_URL_1: string = "https://rickandmortyapi.com/api/character";
	API_URL_2: string = "https://rickandmortyapi.com/api/character?page=2";

	httpClient = inject(HttpClient);

	obtenerDatos1() {
		return this.httpClient.get(this.API_URL_1);
	}
	obtenerDatos2() {
		return this.httpClient.get(this.API_URL_2);
	}
}
