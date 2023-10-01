import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  // http - Objeto do angular

  getCursos() {
    return ['Java', 'Ext Js', 'Angular'];
  }
}
