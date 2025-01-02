import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservations';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
private reservation:Reservations[]=[];
constructor()
{
  let reservations = localStorage.getItem('reservations');
  this.reservation = reservations?JSON.parse(reservations):[];
  
}
//CRUD
getReservations():Reservations[]
{
  return this.reservation;
}
getReservation(id:string):Reservations | undefined{
return this.reservation.find(res=>res.id === id);
}
addReservation(reservation:Reservations):void{
  reservation.id=Date.now().toString();
  this.reservation.push(reservation);
  localStorage.setItem('reservations',JSON.stringify(this.reservation));
  console.log(this.reservation)
}
deleteReservation(id:string):void{
  let index =this.reservation.findIndex(res=>res.id === id);
  this.reservation.splice(index,1);
  localStorage.setItem('reservations',JSON.stringify(this.reservation));
}
updateReservation(id:string,updateReservation:Reservations):void{
  let index = this.reservation.findIndex(res=>res.id === id);
  this.reservation[index]=updateReservation;
  localStorage.setItem('reservations',JSON.stringify(this.reservation));
}

}
