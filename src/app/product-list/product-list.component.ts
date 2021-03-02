import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {category} from '../category';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(private route: ActivatedRoute,){}
  categorys;
  product;
  products = products;
  liked(){
   
  }
  remove(){
    
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {
   const routeParams = this.route.snapshot.paramMap;
   const categorysIdFromRoute = Number(routeParams.get('categorysId'));
    // Find the product that correspond with the id provided in route.
   this.categorys = category.find(categorys => categorys.id === categorysIdFromRoute);
  }


}