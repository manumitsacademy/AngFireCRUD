import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentareaComponent } from './contentarea/contentarea.component';
import { FooterComponent } from './footer/footer.component';
var config = {
  apiKey: "AIzaSyCrau2iYlK-zVOpCGTHeaaOhxGOT5pxikA",
  authDomain: "onlinetest-manumits.firebaseapp.com",
  databaseURL: "https://onlinetest-manumits.firebaseio.com",
  projectId: "onlinetest-manumits",
  storageBucket: "onlinetest-manumits.appspot.com",
  messagingSenderId: "396468853825"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentareaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
