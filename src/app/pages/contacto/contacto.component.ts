import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  private baseUrl = environment.apiUrl;

  emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  contactoForm: FormGroup<
  {

    name: FormControl<string | null>;
    email: FormControl<string | null>;
    message: FormControl<string | null>;
  }>;
  constructor( fb: FormBuilder,
               private http: HttpClient
  ) {
    this.contactoForm = new FormGroup({
      name: new FormControl<string | null>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5)] 
      }),
      email: new FormControl<string | null>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email, Validators.pattern(this.emailValidator)],
      }),
      message: new FormControl<string | null>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(15)],
      }),
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      this.http.post(`${this.baseUrl}/contacto`, this.contactoForm.value)
      .subscribe(
        {
          next: (response) => {
            console.log(response),
            alert('Mensaje enviado con exito!')
          },
          error: (error) => {
            console.log('Error al enviar el mensaje', error),
            alert('Error al enviar el mensaje')
          }
        } 
      );
    }
  }
}
