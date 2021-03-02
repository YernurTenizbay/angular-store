import { Component} from '@angular/core';
import {category} from '../category';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categorys=category;
  constructor() { }



}