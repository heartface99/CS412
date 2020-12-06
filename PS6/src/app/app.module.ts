import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
