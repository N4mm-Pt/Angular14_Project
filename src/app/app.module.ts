import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
    declarations: [AppComponent, CartComponent],
    imports:[BrowserModule,BooksModule,AppRoutingModule,AuthModule],
    bootstrap: [AppComponent],
    providers: [BooksService]
})
export class AppModule{}

