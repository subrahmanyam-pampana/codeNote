import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewSnipComponent} from '../new-snip/new-snip.component';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
export class CodsComponent implements OnInit {

  codes = [
  `0 import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-cods',
    templateUrl: './cods.component.html',
    styleUrls: ['./cods.component.css']
  })
`,
`1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
`,
`2 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
`,
`0 import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-cods',
    templateUrl: './cods.component.html',
    styleUrls: ['./cods.component.css']
  })
`,
`1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})

1 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
`,
`2 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
`,
`2 import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cods',
  templateUrl: './cods.component.html',
  styleUrls: ['./cods.component.css']
})
`,"testing"
];

rows = 1;
items!:Observable<any[]>;
clnRef = this.firestore.collection('items');

  constructor(public dialog: MatDialog,private firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges({idField:"id"});
   }

  ngOnInit(): void {
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
     const index = this.codes.indexOf(snip);
     console.log(index);
     this.codes.splice(index,1);
  }

 onUpdateSnip(obj:any){
   console.log(obj)
   this.codes[obj.index] = obj.newCode;
   console.log(this.codes)
 }

 openDialog() {
  const dialogRef = this.dialog.open(NewSnipComponent);
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
