import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodesDataService {
  tagsCollection:Observable<any[]>;
  // tagsArray!:any[];
    constructor(private firestore:AngularFirestore){
    this.tagsCollection = firestore.collection("tags").valueChanges({idField:"id"})
    // console.log("tags",this.tagsCollection);
    
    // console.log("tags array", this.tagsArray)
  }

  insertTag(tagsArray:any){
    this.firestore.collection("tags").doc("tagsDoc").update({
      tagsArray:tagsArray
    })
  }

  
}
