import { Component } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrl: './listar-gasto.component.css'
})
export class ListarGastoComponent {
subscription:Subscription;
 presupuesto:number;
 restante:number;
 listGastos:any[]=[];

  constructor(private _presupuestoService:PresupuestoService) {

    this.presupuesto=0;
    this.restante=0;

   this.subscription=  this._presupuestoService.getGastos().subscribe(data => {
      this.restante=this.restante-data.cantidad;
      this.listGastos.push(data);
  })
}
ngOnInit():void{
  this.presupuesto= this._presupuestoService.presupuesto;
  this.restante= this._presupuestoService.restante;
}

ngOnDestroy():void{
  this.subscription.unsubscribe;
}

aplicaColor(){
 if(this.presupuesto /4 > this.restante ){
  return 'alert alert-danger';
 }else if(this.presupuesto /2 > this.restante){
  return 'alert alert-warning';

 }else{
  return 'alert alert-success';
 }
}
}

