import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

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
    this.activarMsg=true;
  }

}