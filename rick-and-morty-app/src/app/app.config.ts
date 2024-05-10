import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//* linea agredada, se llama en providers, recurso para llamar a backend
import { provideHttpClient } from "@angular/common/http"; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
