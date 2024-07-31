import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {
  cantidad:number;
  cantidadIcorrecta:boolean;

  constructor(private _presupuestoService:PresupuestoService, private _router:Router){
    this.cantidad = 0;
    this.cantidadIcorrecta = false;
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIcorrecta = false;
      this._presupuestoService.presupuesto=this.cantidad;
      this._presupuestoService.restante=this.cantidad;
      this._router.navigate(['/gastos']);
  }else{
    this.cantidadIcorrecta = true;
   
  }

}
}
