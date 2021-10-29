import { Component, OnInit } from '@angular/core';
import {ListaNoticias,Noticias} from '../../interfaces/noticias';
import {ActivatedRoute,Route} from '@angular/router';
import {Categorias,ListaCategorias} from '../../interfaces/categorias';
@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {
  ListaNoticias=ListaNoticias;
  id:number=0;
  Noticia:any;
  Categorias:any;

  constructor(private ruta:ActivatedRoute) { 
     this.ruta.params.subscribe(datos=>{
          this.id=datos["id"];
          console.log(this.id);  
     })
  }

  ngOnInit(): void {
     
     this.Noticia=ListaNoticias.find(objeto=>objeto.id==this.id);
     this.Categorias=ListaCategorias.find(objeto=>objeto.id==this.Noticia.idCategoria);

     console.log(this.Categorias);
     
  }

}
