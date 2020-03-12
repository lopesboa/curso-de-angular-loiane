import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component'
import { CursosModule } from './cursos/cursos.module'
import { DataBindingComponent } from './data-binding/data-binding.component'
import { MeuFormModule } from './data-binding/meu-form/meu-form.module'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CursosModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
