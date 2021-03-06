import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit {

  constructor(private router:Router) { }
@Input()vehicle:Vehicle;

updateVehicle(){
  this.router.navigate(['/editVehicle/:id',this.vehicle])
}
deleteVehicle(){
  this.router.navigate(['/deleteVehicle/:id',this.vehicle]);
}
detialVehicle(){
  this.router.navigate(['/detailVehicle/:id',this.vehicle])
}
  ngOnInit() {
  }


}
