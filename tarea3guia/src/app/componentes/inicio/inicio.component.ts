import { Component, OnInit } from '@angular/core';
import { Listaextras } from 'src/app/interfaces/noticiasextras';
import {ListaNoticias} from '../../interfaces/noticias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  ListaNoticias=ListaNoticias;
  Listaextras=Listaextras;
  constructor() { }

  ngOnInit(): void {
  }

}
