import { Component, Input, OnInit,Output,EventEmitter, OnChanges, SimpleChanges,ViewEncapsulation } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

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
  @Input() snip:any;
  @Input() index!:any;
  @Output() deleteSnipEvent = new EventEmitter();
  @Output() updateSnip = new EventEmitter();

  constructor() {
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
}
