import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable} from 'rxjs';

interface dispInterface{
  title?:string,
  display:string,
  tags:string[]
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  codes:Observable<any[]>;
  displayArray:dispInterface[]=[];
  constructor(private firestore: AngularFirestore) {
    this.codes = firestore.collection('codes').valueChanges();

    this.codes.subscribe(snips=>{
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
            display:"flex",
            tags:snip.tags
          });
        })
    });
   }

  searchContent(searchText:string){
    if(!searchText){
      this.resetFilter();
     return;
    }
     this.displayArray.forEach(snip=>{
      if(snip.title){
        if(snip.title.indexOf(searchText)!= -1){
          snip.display = "flex"
       }else{
        snip.display = "none"
       }
      }
     })
  }

  filterTag(tagName:string){
    if(!tagName){
     this.resetFilter();
     return;
    }

    this.displayArray.forEach(snip=>{
      if(snip.tags && snip.tags.indexOf(tagName)!= -1 ){
        snip.display = "flex"
      }else{
        snip.display = "none"
      }
    })

  }

  resetFilter(){
    this.displayArray.forEach(snip=>{
      snip.display = "flex"
    })
  }
}
