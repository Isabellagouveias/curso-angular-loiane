import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { FormsModule } from '@angular/forms';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
