import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
  baseUrl:string="https://dummyjson.com/users"
  constructor(private http:HttpClient) { }
 //function for get a user
 getUser(){
  return this.http.get(this.baseUrl)
 }
}
