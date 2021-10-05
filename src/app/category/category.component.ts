import { Component, OnInit } from '@angular/core';
import { Card } from '../model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cards:Array<Card>=[
    {
      id:21,
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews1.jpg",
      color:"color1"
    },
    {
      id:22,
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews2.jpg",
      color:"color1"
    },
    {
      id:23,
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews3.jpg",
      color:"color1"
    },
    {
      id:24,
      title:"NIGHT PARTY",
      text:"Welcome To The Best Model Winner Contest",
      imgsrc:"assets/img/news/whatNews4.jpg",
      color:"color1"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
