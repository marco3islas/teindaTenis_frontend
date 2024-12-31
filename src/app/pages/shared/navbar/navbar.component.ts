import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public navbarItems = [
    {label: 'home', icon: 'home', url:'./home'},
    {label: 'store', icon: 'store', url:'./tienda'},
    {label: 'about', icon: 'person', url:'./about'},
    {label: 'contacto', icon: 'contact_page', url:'./contacto'},
  ]

}
