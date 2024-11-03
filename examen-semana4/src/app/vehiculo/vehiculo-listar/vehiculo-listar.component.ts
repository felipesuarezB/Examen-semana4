import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  countVehiculo: { [marca: string]: number } = {};
  constructor(private vehiculoService:VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.countVehiculos();
    });
  }

  countVehiculos(): void {
    this.vehiculos.forEach(vehiculo => {
      if (this.countVehiculo[vehiculo.marca]) {
        this.countVehiculo[vehiculo.marca]++;
      } else {
        this.countVehiculo[vehiculo.marca] = 1;
      }
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
