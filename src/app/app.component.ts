import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { NgModel } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleApiService, UserInfo } from './google-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shoppingapp';
  products: any;
  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 15;
  userInfo?: UserInfo
  tableSizes: any = [5, 10, 15, 20];
  constructor(private userservice: UsersService, private readonly googleApi: GoogleApiService) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
  }
  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  ngOnInit(): void {
    this.productList();
  }

  productList(): void {
    this.userservice.getallproducts().subscribe((response) => {
      this.products = response;
      this.totalItems = this.products.length;
      console.log(this.products);
    })
  }
  getProducts(): any[] {
    let startIndex = (this.currentPage - 1) * this.itemsPerPage;
    let endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }
}
