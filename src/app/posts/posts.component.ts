import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  PostData:any;

  constructor() {
    this.PostData=[];
   }

  ngOnInit() {
   this.PostData.push({userName:"User1",Date:"14-05-2018",DishName:"Dish1",restaurentArea:"Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
   {userName:"User2",Date:"15-05-2018",DishName:"Dish2",restaurentArea:"Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
   {userName:"User3",Date:"16-05-2018",DishName:"Dish3",restaurentArea:"Ut enim ad minim veniam, quis nostrud exercitation ullamco"},
   {userName:"User4",Date:"17-05-2018",DishName:"Dish4",restaurentArea:"Ut enim ad minim veniam, quis nostrud exercitation ullamco"}
   )
  }

}
