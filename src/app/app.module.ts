import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DiretivasModule } from './diretivas/diretivas.module';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DataBindingModule,
    CursosModule,
    DiretivasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
