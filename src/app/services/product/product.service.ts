import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.GET_ALL_CATEGORY);
  }

  getProducts(){
    return this.http.get(Constants.API_END_POINT+Constants.METHODS.GET_ALL_PRODUCT);
  }

  saveProduct(obj:any){
    return this.http.post(Constants.API_END_POINT+Constants.METHODS.CREATE_PRODUCT,obj);
  }

  updateProduct(obj:any){
    return this.http.post(Constants.API_END_POINT+Constants.METHODS.UPDATE_PRODUCT,obj);
  }

  deleteProduct(id:any){
    return this.http.delete(Constants.API_END_POINT+Constants.METHODS.DELETE_PRODUCT+id);
  }

}
