import { Component, OnInit } from '@angular/core';
import {NewitemComponent} from '../dialogs/newitem/newitem.component';
import {MatDialog} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {DbproductsService} from '../services/dbproducts.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  lista: Observable<any>;

  constructor(public dialog: MatDialog, public db: AngularFireDatabase,
              private inventario: DbproductsService) {
  }

  ngOnInit() {
    this.lista = this.inventario.getItemList();
  }

  addItem() {
    const dialogRef = this.dialog.open(NewitemComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
