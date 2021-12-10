import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingSnipComponent } from './coding-snip/coding-snip.component';
import { HighlightModule,HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodsComponent } from './cods/cods.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ToastComponent } from './toast/toast.component';
import { NotesComponent } from './notes/notes.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import { TestGridLayoutComponent } from './test-grid-layout/test-grid-layout.component'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NewSnipComponent } from './new-snip/new-snip.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
//firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CodingSnipComponent,
    CodsComponent,
    TopNavBarComponent,
    ToastComponent,
    NotesComponent,
    SideBarComponent,
    TestGridLayoutComponent,
    NewSnipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule  
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbers: true
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
