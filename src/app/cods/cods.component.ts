import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewSnipComponent} from '../new-snip/new-snip.component';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
export class CodsComponent implements OnInit,AfterViewInit {
  codes:Observable<any[]>;

rows = 1;
items!:Observable<any[]>;
clnRef = this.firestore.collection('codes');

  constructor(public dialog: MatDialog,private firestore: AngularFirestore) {
    this.codes = firestore.collection('codes').valueChanges({idField:"id"});
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
 //   alert("View init")
  }

  autoScroll(event:any){
    let textArea = event.target;
    textArea.style.height = "auto";
    textArea.style.height = (textArea.scrollHeight) + "px";
  }

  codeMousedown(event:any){
    let textArea = event.target;
    textArea.style.height = "111px";
    this.rows = 5;
  }

  onDeleteSnip(snip:any){
    this.clnRef.doc(snip.id).delete()
    this.clnRef.doc(snip.id).delete().then(e=>{
      alert("deleted "+snip.id);
    })
  }

 onUpdateSnip(snip:any,event:any){
  //  console.log(obj)
  // // this.codes[obj.index] = obj.newCode;
  //  console.log(this.codes)

  this.clnRef.doc(snip.id).update({
    code:event.newCode
   }).then(result=>{
     alert("updated")
   })
 }

 openDialog() {
  const dialogRef = this.dialog.open(NewSnipComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
