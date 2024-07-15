import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList:any[]=[];
  productsList:any[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((res:any)=>{
      this.categoryList=res.data;
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.productsList=res.data;
    })
  }

  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Create Successfully");
        this.getProducts();
      }else{
        alert(res.message);
      }
    })
  }

  onUpdate(){
    this.productService.updateProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Updated Successfully");
        this.getProducts();
      }else{
        alert(res.message);
      }
    })
  }


  onDelete(item:any){
    const isDelete=confirm("Confirm Product Deleteion?");
    if(isDelete){
      this.productService.deleteProduct(item.productId).subscribe((res:any)=>{
        debugger;
        if(res.result){
          alert("Product Deleted Successfully");
          this.getProducts();
        }else{
          alert(res.message);
        }
      })
    }
  }


  onEdit(item:any){
    this.productObj=item;
    this.openSidePanel();
  }



  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
