import { ProductsService } from './../../../services/products.service';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  constructor(
    private service: UsersService,
    private productService: ProductsService
  ) {}
  usersData = [];
  productsStatistics = [];
  isLoading = false;
  ngOnInit(): void {
    this.service.getAllUsers().subscribe((users) => {
      let userArr;
      this.isLoading = true;
      userArr = users.data['data'];
      this.isLoading = false;
      this.usersData = userArr;
    });

    this.productService.getProdStats().subscribe((prod) => {
      let stats;
      this.isLoading = true;
      stats = prod.data;
      this.isLoading = false;
      this.productsStatistics = stats;
    });
  }
}
