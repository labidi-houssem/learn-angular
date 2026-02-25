import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title:any ="hello ya l5ou";
 products: any[] = [
  {
    id: 1,
    name: 'Plastic Bottle',
    category: 'Recycling',
    price: 2.5,
    quantity: 100,
    status: 'Available'
  },
  {
    id: 2,
    name: 'Recycled Dog Bowl',
    category: 'Pet Products',
    price: 15,
    quantity: 40,
    status: 'Out of stock'
  },
  {
    id: 3,
    name: 'Cat Food (Eco Pack)',
    category: 'Pet Food',
    price: 12,
    quantity: 60,
    status: 'Available'
  }
];
show(){alert("ya l5ou nzelt 3la button rak");}
buy(id: number) {
  const product = this.products.find(p => p.id === id);

  if (product && product.quantity > 0) {
    product.quantity--;
  }
}
}
