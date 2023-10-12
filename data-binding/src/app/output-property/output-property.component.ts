import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
})
export class OutputPropertyComponent implements AfterViewInit {
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput!: ElementRef;

  ngAfterViewInit() {
    console.log('this.campoValorInput', this.campoValorInput);
  }

  incrementa() {
    console.log(
      'this.campoValorInput.nativeElement.value',
      this.campoValorInput.nativeElement.value
    );

    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
  }
}
