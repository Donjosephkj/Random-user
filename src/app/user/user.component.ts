import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users:any=''
  rand:any=''
  randomUser:any=''
  colors:any=[{color:"aqua"},{color:"rgb(250, 50, 50)"},{color:"rgb(50, 103, 250)"},{color:"rgb(250, 50, 127)"},{color:"rgb(229, 255, 0)"},{color:"rgb(21, 255, 0)"}]
  randColor:any=''
  randomNumber:any=''
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.api.getUser().subscribe((data:any)=>{
      this.users=data.users
      this.searchRandom()
    })
    
  }
  searchRandom(){
    this.rand=Math.floor(Math.random() * this.users.length);
    this.randomUser=this.users[this.rand]
    this.randomNumber=Math.floor(Math.random() * this.colors.length);
    this.randColor=this.colors[this.randomNumber]
  }
  
}
