import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-snip',
  templateUrl: './new-snip.component.html',
  styleUrls: ['./new-snip.component.css']
})
export class NewSnipComponent implements OnInit {
  @Output() saveNewCodeEvent = new EventEmitter();
  clnRef = this.firestore.collection('codes');
  snip = {
    code:"",
    title:""
  };
  constructor(private firestore: AngularFirestore) {}
  ngOnInit(): void {
  }

  saveNewCode(){
    if(this.snip.code!=""){
      this.clnRef.add(this.snip).then(e=>{
        console.log("new code added")
      })
    }  
 }
}
