import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;

        &:hover {
          cursor: pointer;
        }
      }
    `,
  ],
})
export class DataBindingComponent {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem =
    'https://www.alura.com.br/artigos/assets/como-comecar-com-angular/como-comecar-com-angular.png';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent) {
    const inputElement = evento.target as HTMLInputElement;
    this.valorAtual = inputElement.value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
