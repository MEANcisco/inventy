import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DbproductsService {

  constructor(private angularFirestore: AngularFirestore) { }

  getItemDoc(id) {
    return this.angularFirestore
        .collection('inventario')
        .doc(id)
        .valueChanges()
  }

  getItemList() {
    return this.angularFirestore
        .collection('inventario')
        .snapshotChanges();
  }

  createItem(item) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
          .collection('inventario')
          .add(item)
          .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteItem(item) {
    return this.angularFirestore
        .collection('inventario')
        .doc(item.id)
        .delete();
  }

  updateItem(item: any, id) {
    return this.angularFirestore
        .collection('inventario')
        .doc(id)
        .update({
          sku: item.name,
          nombre: item.email,
          valor: item.contact,
          cantidad: item.cantidad
        });
  }
}
