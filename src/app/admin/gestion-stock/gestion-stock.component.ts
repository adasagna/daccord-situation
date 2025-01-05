import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-stock',
  standalone: true,
  imports: [SidebarComponent, FormsModule],
  templateUrl: './gestion-stock.component.html',
  styleUrl: './gestion-stock.component.css'
})
export class GestionStockComponent {
  meuble:any[]=[]
  listmeuble:any
  tabmeuble:any
  list:any

  nom:string='';
  prix:string='';
  description:string='';
  urlimage : string= "";
  
  ngOnInit(){
    if(!localStorage.getItem("meuble")){
      localStorage.setItem("meuble", JSON.stringify(this.meuble));
    }
    this.tabmeuble =JSON.parse(localStorage.getItem("meuble")|| "[]");
    console.log(this.tabmeuble);
    this.getAllmeuble();
}
  getAllmeuble(){
    this.listmeuble  =JSON.parse(localStorage.getItem("meuble")|| "[]")
    this.list=this.meuble
  }
  Ajoutmeuble(){
    let m={
      nom:this.nom,
      prix:this.prix,
      description:this.description,
      urlimage:this.urlimage
    }
    this.listmeuble.push(m);
    console.log(this.listmeuble);
    localStorage.setItem('meuble',JSON.stringify(this.listmeuble));
    this.getAllmeuble();
  }
}
