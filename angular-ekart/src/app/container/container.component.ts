import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  listOfString: string[] = ['Sudhakar', 'Ram', 'Ragavan', 'Parthiban', 'Kathir'];

  searchText:string = '';
  setSearchText(event: string){
    this.searchText = event;
  }

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;
}

// name: string = "Sudhakar";
  // addToCart:number = 0;

  // product: {
  //   discount: number; name: string, price: number, color: string, stock: number, pImage: string
  // } = {
  //     name: 'iPhone',
  //     price: 999,
  //     color: 'Matte Black',
  //     discount: 8.5,
  //     stock: 5,
  //     pImage: "assets/images/iphone13.jpg"
  //   }

  // getDiscountedPrice() {
  //   return (this.product.price - this.product.price * this.product.discount / 100)
  // }

  // decrementCartValue(){
  //   this.addToCart--;
  // }

  // incrementCartValue(){
  //   this.addToCart++;
  // }

  // onNameChange(event: any){
  //   this.name=event.target.value;
  // }
