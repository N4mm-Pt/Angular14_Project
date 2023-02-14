import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports:[BrowserModule,FormsModule,BooksModule,AppRoutingModule],
    bootstrap: [AppComponent],
    providers: [BooksService]
})
export class AppModule{}

