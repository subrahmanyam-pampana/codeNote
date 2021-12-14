import { Component, Input, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';
import {CodesDataService} from '../services/codeData/codes-data.service'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
    @Input() tags!:Array<string>;
    @Input() id:any;
    // tagsCollection:Observable<any[]>;
    tagsArray!:any[];
    collectionRef = this.firestore.collection('codes');
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    ngOnInit(): void {
    }
    
  constructor(private firestore:AngularFirestore,private dataService:CodesDataService){
 
      dataService.tagsCollection.subscribe(tags=>{
        this.tagsArray = tags[0].tagsArray;
      })

  }


    add(event: MatChipInputEvent): void {
      //alert("adding....")
      console.log(this.tagsArray)
      const value = (event.value || '').trim();
      if(this.tags=== undefined){
        this.tags =[]
      }
      if (value) {
        if(this.tags.indexOf(value)=== -1){
          this.tags.push(value);
          //updating tags to codes collection
          this.collectionRef.doc(this.id).update({
            tags:[...this.tags]
          }).then(e=>{
            console.log("updated")
          })
         //updating tag value to tags collection
        if(this.tagsArray.indexOf(value)=== -1){
          this.tagsArray.push(value)
          this.dataService.insertTag(this.tagsArray);
        }  
        }
      
        
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
