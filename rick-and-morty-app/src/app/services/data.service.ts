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
	API_URL_3: string = "https://rickandmortyapi.com/api/character?page=3";
	API_URL_4: string = "https://rickandmortyapi.com/api/character?page=4";
	API_URL_5: string = "https://rickandmortyapi.com/api/character?page=5";
	API_URL_6: string = "https://rickandmortyapi.com/api/character?page=6";
	API_URL_7: string = "https://rickandmortyapi.com/api/character?page=7";

	httpClient = inject(HttpClient);

	obtenerDatos1() {
		return this.httpClient.get(this.API_URL_1);
	}
	obtenerDatos2() {
		return this.httpClient.get(this.API_URL_2);
	}
	obtenerDatos3() {
		return this.httpClient.get(this.API_URL_3);
	}
	obtenerDatos4() {
		return this.httpClient.get(this.API_URL_4);
	}
	obtenerDatos5() {
		return this.httpClient.get(this.API_URL_5);
	}
	obtenerDatos6() {
		return this.httpClient.get(this.API_URL_6);
	}
	obtenerDatos7() {
		return this.httpClient.get(this.API_URL_7);
	}
}
