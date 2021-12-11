import { Component, Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges,ViewEncapsulation } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-coding-snip',
  templateUrl: './coding-snip.component.html',
  styleUrls: ['./coding-snip.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CodingSnipComponent implements OnInit {
 
  editing = false;
  editText ="edit";
  active = false;
  response!: HighlightResult;
  isDelete:boolean= false;
  collectionRef = this.fs.collection('codes');
  toggleTags:boolean = false;
  @Input() snip:any;
  @Input() index!:any;
  @Output() deleteSnipEvent = new EventEmitter();
  @Output() updateSnip = new EventEmitter();

  constructor(private fs:AngularFirestore) {
   }

  ngOnInit(): void { 
   
  }
   copySnip() {
    navigator.clipboard.writeText(this.snip.code);
    alert("Copied the text: " + this.snip.code);
  }

  deleteSnip(event:any){
    this.deleteSnipEvent.emit(this.snip);
    this.isDelete = false;
  }

  fnupdateSnip(event:any){
    let newCode = event.target.innerText;
    if(this.snip.code != newCode){
      this.updateSnip.emit({
        index:this.index,
        newCode:newCode.trim()
      });
    }
  } 
  
  saveTitle(event:any){
    if(this.snip.title!=event.target.innerText){
      console.log(event.target.innerText);
      this.snip.title = event.target.innerText;
     this.collectionRef.doc(this.snip.id).update({
       title:this.snip.title
     }).then(e=>{
       console.log("title updated")
     })
    }
   
  }

}
