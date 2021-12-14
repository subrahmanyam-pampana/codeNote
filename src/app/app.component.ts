import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
//fire base imports
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
//fire base imports
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codeNote';
  public dataList!: Observable<any>[]; 
  tags!:string[];
  searchText!:string;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
        private firestore:AngularFirestore) {
        this.firestore.collection("tags").
        doc("tagsDoc").snapshotChanges().subscribe(snapShot=>{
    
           console.log() 
           interface tagdatatype{
             tagsArray:Array<string>
           }
           const data:tagdatatype = <tagdatatype>snapShot.payload.data();
           console.log(data.tagsArray)
           this.tags = data.tagsArray
            // debugger
        })
  }

  
  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

 

}

