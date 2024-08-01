import { Component } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})
export class IngresarGastoComponent {

  nombreGasto:string;
  cantidad:number;
  formularioIncorrecto:boolean;
  textoIncorrecto:string;

  /**
   *
   */
  constructor(private _presupuestoService:PresupuestoService) {
   this.nombreGasto='';
   this.cantidad=0;
   this.formularioIncorrecto=false;
   this.textoIncorrecto='';
    
  }
  agregarGasto(){
    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto=true;
      this.textoIncorrecto='Cantidad mayor que la restante';
      return;
    }
    const GASTO={
      nombre:this.nombreGasto,
      cantidad:this.cantidad
    }

    this._presupuestoService.agregarGasto(GASTO)

    if(this.nombreGasto=='' || this.cantidad<=0){
      this.formularioIncorrecto=true;
      
    }else{
      this.formularioIncorrecto=false;
      this.nombreGasto='';
      this.cantidad=0;
    }
  }

}
