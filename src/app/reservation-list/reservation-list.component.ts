import { Component, OnInit } from '@angular/core';
import { Reservations } from '../models/reservations';
import { ReservationService } from '../reservation/reservation.service';
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{
  reservations:Reservations[]=[];
  constructor(private reservationService:ReservationService)
  {

  }
  ngOnInit(): void {
      this.reservationService.getReservations().subscribe(reservations=>
      {
        this.reservations=reservations
      }
      );
  }
  deleteReservation(id:string)
  {
    this.reservationService.deleteReservation(id).subscribe(res=>
    {
      console.log("Delete Request Got Processed!")
    }
    );
  }
}
