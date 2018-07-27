import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent, Board, Square } from "./app.component";

//Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Material
import { MaterialModule } from "./material";



@NgModule({
  declarations: [AppComponent, Board, Square],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
