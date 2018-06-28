import { Injectable } from '@angular/core';

// TODO: AngularFire2
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Injectable()
export class MiscProvider {

  dbRef: AngularFireObject<any>;
  items: Observable<any[]>;

  constructor(public afDB:AngularFireDatabase) {

    this.dbRef = this.afDB.object('/db/');
    this.items = this.dbRef.valueChanges();

  }

  newDeveloper(id, name, position){
    this.afDB.object('db/' + id).set({
      name: name,
      position: position
    });
  }

}
