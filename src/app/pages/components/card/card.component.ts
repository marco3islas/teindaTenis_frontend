import { Component, Input, OnInit } from '@angular/core';
import {Tenis} from '../../interfaces/tenis';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public tenis!: Tenis;

  ngOnInit(): void {

    if(!this.tenis) throw('La propiedad tenis es requerida');

  }

}
