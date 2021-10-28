import { Component, OnInit } from '@angular/core';
import {Listaextras,Extras} from '../../interfaces/noticiasextras';
import {ActivatedRoute,Route} from '@angular/router';
import {Categoriasextras,ListaCategorias} from '../../interfaces/categoriasextras';

@Component({
  selector: 'app-detalle-noticia-extra',
  templateUrl: './detalle-noticia-extra.component.html',
  styleUrls: ['./detalle-noticia-extra.component.scss']
})

export class DetalleNoticiaExtraComponent implements OnInit {
  Listaextras=Listaextras;
  id:number=0;
  Extras:any;
  Categorias:any;

  constructor(private ruta:ActivatedRoute) { 
     this.ruta.params.subscribe(datos=>{
          this.id=datos["id"];
          console.log(this.id);  
     })
  }

  ngOnInit(): void {
     
     this.Extras=Listaextras.find(objeto=>objeto.id==this.id);
     this.Categorias=ListaCategorias.find(objeto=>objeto.id==this.Extras.idCategoria);

     console.log(this.Categorias);
     
  }

}

