import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewSnipComponent} from '../new-snip/new-snip.component';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';


interface CodeSnip{
  code:string,
  tags:Array<string>,
  title?:string
}
interface dispInterface{
  title?:string,
  display:string
}

@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.scss']
})
export class CodsComponent implements OnInit,AfterViewInit {
codes:Observable<any[]>;
rows = 1;
clnRef = this.firestore.collection('codes');
addNewIcon ="add";
codeStack:CodeSnip[] = [];
searchText!:string;
searchActive = false;
displayArray:dispInterface[]=[];

  constructor(public dialog: MatDialog,private firestore: AngularFirestore) {
    this.codes = firestore.collection('codes').valueChanges({idField:"id"});

    this.codes.subscribe(snips=>{
     // console.log(snips)
     this.displayArray = [];
        snips.forEach(snip=>{
          let str = snip.title+snip.code;
          if(snip.tags){
             snip.tags.forEach((ele: string)=>{
               str+=ele;
             })
          }
          this.displayArray.push({
            title:str,
            display:"flex"
          });
        })
    });
    
  
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
    this.codeStack.push({
      code:snip.code,
      title: (snip.title)?snip.title:"",
      tags:(snip.tags)?snip.tags:[]
    });
    this.clnRef.doc(snip.id).delete().then(e=>{
      console.log("deleted "+snip.id);
    })
  }

 onUpdateSnip(snip:any,event:any){
  this.clnRef.doc(snip.id).update({
    code:event.newCode
   }).then(result=>{
    // alert("updated")
   })
 }

 openDialog() {
  const dialogRef = this.dialog.open(NewSnipComponent);
  this.addNewIcon = "close"
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.addNewIcon = "add"
  });
}

undo(){
 const obj = this.codeStack.pop();
 if(obj){
  this.clnRef.add(obj).then(e=>{
    console.log("undo is completed")
  })
 }
}
search(){
  if(!this.searchText){
    this.displayArray.forEach(snip=>{
      snip.display = "flex"
    })
   return;
  }
   this.displayArray.forEach(snip=>{
    if(snip.title){
      if(snip.title.indexOf(this.searchText)!= -1){
        snip.display = "flex"
     }else{
      snip.display = "none"
     }
    }
   })
}

}
