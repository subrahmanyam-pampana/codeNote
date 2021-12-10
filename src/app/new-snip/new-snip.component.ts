import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-snip',
  templateUrl: './new-snip.component.html',
  styleUrls: ['./new-snip.component.css']
})
export class NewSnipComponent implements OnInit {
  @Output() saveNewCodeEvent = new EventEmitter();
  snip = "";
  constructor() {}
  ngOnInit(): void {
  }

  // saveNewCode(event:any){
  //   if(this.newCode!=""){
  //     console.log("save")
  //     alert("saved!")
  //     this.codes.unshift(this.newCode);
  //     console.log(this.codes)
  //     this.newCode = "";
  //     this.rows = 1;
  //   }
//     event.target.style.height = "54px"
//  }
}
