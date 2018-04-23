import { Component } from '@angular/core';
import { SmsService } from './sms.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import {  AngularFireList } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  title = 'app';
  phoneno;
  items: AngularFireList<any[]>;
  constructor(
    private _sms: SmsService,
    private db: AngularFireDatabase
  ) {
    // const afList = db.list('phonenos');
    // afList.push({ phone: this.phoneno });
    // this.items = db.list('/phonenos');
  }
  myfn() {
    const afList = this.db.list('phonenos');
    afList.push({ phone: this.phoneno });
    this.phoneno = '';

    // this._sms.newnumber();
  }
}
