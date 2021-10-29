import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent implements OnInit {
  
  
  nombre:any;
  telefono:any;
  correo:any;
  dirigidoa:any;
  mensaje:any;
  formulario:FormGroup;
  activarMsg:Boolean=false;



  constructor(public form:FormBuilder) {
      this.formulario=this.form.group({
        nombre:["",[Validators.required,Validators.maxLength(40)]],
        telefono:["",[Validators.required,Validators.maxLength(9)]],
        correo:["",[Validators.required,Validators.maxLength(50),Validators.minLength(9)]],
        dirigidoa:["",[Validators.required]],
        mensaje:["",[Validators.required,Validators.maxLength(100)]]
      });
   }

  ngOnInit(): void {
  }
  
  validacion(){
    (<HTMLInputElement> document.getElementById("botonenvio")).hidden = true;
    (<HTMLInputElement> document.getElementById("cabezanombre")).hidden = true;
    (<HTMLInputElement> document.getElementById("cabezatelefono")).hidden = true;
    (<HTMLInputElement> document.getElementById("cabezacorreo")).hidden = true;
    (<HTMLInputElement> document.getElementById("cabezadirigidoa")).hidden = true;
    (<HTMLInputElement> document.getElementById("cabezamensaje")).hidden = true;
    (<HTMLInputElement> document.getElementById("nombre")).hidden = true;
    (<HTMLInputElement> document.getElementById("telefono")).hidden = true;
    (<HTMLInputElement> document.getElementById("correo")).hidden = true;
    (<HTMLInputElement> document.getElementById("dirigidoa")).hidden = true;
    (<HTMLInputElement> document.getElementById("mensaje")).hidden = true;
    this.activarMsg=true;
  }

  


}