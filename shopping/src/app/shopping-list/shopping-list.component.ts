import { Component, OnInit } from '@angular/core';
import { Ingrdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingrdient[] = [
    new Ingrdient('apples' , 5),
    new Ingrdient('mangos' , 10)
  ];
    ngOnInit(): void {
        
    }
}
