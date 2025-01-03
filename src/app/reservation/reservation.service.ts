import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservations';
import { retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = "http://localhost:3001"
private reservation:Reservations[]=[];
// constructor()
// {
//   let reservations = localStorage.getItem('reservations');
//   this.reservation = reservations?JSON.parse(reservations):[];
  
// }
//CRUD
constructor(private http:HttpClient)
{

}
getReservations():Observable<Reservations[]>
{
  // return this.reservation;
  return this.http.get<Reservations[]>(`${this.apiUrl}/reservations`)

}
getReservation(id:string):Observable<Reservations>{
// return this.reservation.find(res=>res.id === id);
return this.http.get<Reservations>(`${this.apiUrl}/reservation/${id}`)
}
addReservation(reservation:Reservations):Observable<void>{
  // reservation.id=Date.now().toString();
  // this.reservation.push(reservation);
  // // localStorage.setItem('reservations',JSON.stringify(this.reservation));
  // console.log(this.reservation)
  return this.http.post<void>(`${this.apiUrl}/reservation`,reservation);
}
deleteReservation(id:string):Observable<void>{
  // let index =this.reservation.findIndex(res=>res.id === id);
  // this.reservation.splice(index,1);
  // localStorage.setItem('reservations',JSON.stringify(this.reservation));
  return this.http.delete<void>(`${this.apiUrl}/reservation/${id}`)
}
updateReservation(id:string,updateReservation:Reservations):Observable<void>{
  // let index = this.reservation.findIndex(res=>res.id === id);
  // this.reservation[index]=updateReservation;
  // localStorage.setItem('reservations',JSON.stringify(this.reservation));
  return this.http.put<void>(`${this.apiUrl}/reservation/${id}`,updateReservation)
}

}
