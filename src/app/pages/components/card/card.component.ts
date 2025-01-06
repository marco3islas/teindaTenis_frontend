import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Tenis } from '../../interfaces/tenis';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public tenis!: Tenis;

  @Output() clicked = new EventEmitter<number>();

  ngOnInit(): void {
    if (!this.tenis) throw 'La propiedad tenis es requerida';
  }

  onClick(): void {
    this.clicked.emit(this.tenis.id);
    console.log(this.tenis.id);
  }
}
