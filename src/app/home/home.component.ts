import { Component, OnInit } from '@angular/core';
import { Card } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  cards1:Array<Card>=[
   {
    id:1,
    title:"LIFESTYLE",
    text:"Get the Illusion of Fuller Lashes by 'Mascng'",
    imgsrc:"assets/img/trending/trending_bottom1.jpg",
    color:"color1"
   },
   {
    id:2,
    title:"SPORTS",
    text:"Get the Illusion of Fuller Lashes by 'Mascng'",
    imgsrc:"assets/img/trending/trending_bottom2.jpg",
    color:"color2"
   },
   {
    id:3,
    title:"TRAVELS",
    text:"Welcome To The Best Model Winner Contest'",
    imgsrc:"assets/img/trending/trending_bottom3.jpg",
    color:"color3"
   }
  ];

  cards2:Array<Card>=[
    {
      id:4,
      title:"Concert",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right1.jpg",
      color:"color1"
     },
     {
      id:5,
      title:"Sea beach",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right2.jpg",
      color:"color3"
     },
     {
      id:6,
      title:"Bike Show",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right3.jpg",
      color:"color2"
     },
     {
      id:7,
      title:"Sea beach",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right4.jpg",
      color:"color4"
     },
     {
      id:8,
      title:"Skeping",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/trending/right5.jpg",
      color:"color1"
     }
  ];

  cards3:Array<Card>=[
    {
      id:9,
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews2.jpg",
      color:"color1"
     },
     {
      id:10,
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews3.jpg",
      color:"color1"
     },
     {
      id:11,
      title:"STRIKE",
      text:"Welcome To The Best Model Winner Contest'",
      imgsrc:"assets/img/news/weeklyNews1.jpg",
      color:"color1"
     }
  ];

  cards4:Array<Card>=[
    {
      id:12,
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News1.jpg",
      color:""
     },
     {
      id:13,
      title:"EVENT NIGHT",
      text:"",
      imgsrc:"assets/img/news/weekly2News2.jpg",
      color:""
     },
     {
      id:14,
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News3.jpg",
      color:""
     },
     {
      id:15,
      title:"EVENT TIME",
      text:"",
      imgsrc:"assets/img/news/weekly2News4.jpg",
      color:""
     },
     {
      id:16,
      title:"CORPORATE",
      text:"",
      imgsrc:"assets/img/news/weekly2News4.jpg",
      color:""
     }
  ];

  cards5:Array<Card>=[
    {
      id:17,
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent1.jpg",
      color:""
     },
     {
      id:18,
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent2.jpg",
      color:""
     },
     {
      id:19,
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent3.jpg",
      color:""
     },
     {
      id:20,
      title:"",
      text:"",
      imgsrc:"assets/img/news/recent1.jpg",
      color:""
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
