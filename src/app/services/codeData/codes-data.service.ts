import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodesDataService {
  tagsCollection:Observable<any[]>;
  tagsArray!:string[]
    constructor(private firestore:AngularFirestore){
    this.tagsCollection = firestore.collection("tags").valueChanges({idField:"id"})
    this.tagsCollection.subscribe(tags=>{
      this.tagsArray = tags[0].tagsArray;
    })
  }

  insertTag(tagsArray:any){
    this.firestore.collection("tags").doc("tagsDoc").update({
      tagsArray:tagsArray
    })
  }

  deleteTag(tagName:string){
    this.tagsArray.splice(this.tagsArray.indexOf(tagName),1)
    this.firestore.collection("tags").doc("tagsDoc").update({
      tagsArray:this.tagsArray
    }).then(data=>{
      console.log("tag removed");
    })
  }

  
}
