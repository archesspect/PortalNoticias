import { Component, OnInit } from '@angular/core';
import { Listaextras } from 'src/app/interfaces/noticiasextras';
import { ListaNoticias } from '../../interfaces/noticias';
import { ActivatedRoute } from '@angular/router';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {


  public ListaNoticias=ListaNoticias;
  public Listaextras=Listaextras;
  
  constructor() { 
 }

  ngOnInit(): void {
  }

}
