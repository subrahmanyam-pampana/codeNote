import { Component, Input, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags!:Array<string>;
  @Input() id:any;
  collectionRef = this.firestore.collection('codes');
  ngOnInit(): void {
  }
  
constructor(private firestore:AngularFirestore){

}
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    //alert("adding....")
    const value = (event.value || '').trim();
    if(this.tags=== undefined){
      this.tags =[]
    }
    if (value) {
      this.tags.push(value);
      this.collectionRef.doc(this.id).update({
        tags:[...this.tags]
      }).then(e=>{
        console.log("updated")
      })
    }
    
    event.chipInput!.clear();
  }

  remove(tag:any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.collectionRef.doc(this.id).update({
        tags:[...this.tags]
      }).then(e=>{
        console.log("updated")
      })
    }
  }

}
