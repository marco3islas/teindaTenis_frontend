import { Component, OnInit } from '@angular/core';
import {TenisService} from '../tenis-service.service';
import {Tenis} from '../interfaces/tenis';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public tenis: Tenis[] = [];

  constructor( private teniService: TenisService){}

  ngOnInit(): void {

    this.teniService.getTenis()
    .subscribe( tenis => {this.tenis = tenis})
  }



}
