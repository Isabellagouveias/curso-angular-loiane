import { Component } from '@angular/core';

@Component({
  selector: 'meu-primeiro-component',
  template: `
    <h1>Hello World!</h1>
    <p>This template definition spans multiple lines.</p>
  `,
  styles: ['h1 { font-weight: bold; }'],
})
export class MeuPrimeiroComponent {}
