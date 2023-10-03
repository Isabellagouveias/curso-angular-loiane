import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent {
  nome: string = 'abc';

  pessoa: any = {
    nome: 'Isabella',
    idade: 21,
    end: {
      logradouro: 'rua dos bobos',
      numero: 0,
    },
  };
}
