import { Component, OnInit } from '@angular/core';
import {DbproductsService} from '../../services/dbproducts.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.scss']
})
export class NewitemComponent implements OnInit {

  item = {
    sku: null,
    nombre: '',
    valor: 0,
    cantidad: 0
  };
  constructor(private products: DbproductsService,
              public dialogRef: MatDialogRef<NewitemComponent>) { }

  ngOnInit(): void {
  }

  AddProduct() {
    this.products.createItem(this.item);
    this.dialogRef.close();
  }
}
