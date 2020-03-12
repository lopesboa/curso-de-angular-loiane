import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component'
import { CursosModule } from './cursos/cursos.module'
import { DataBindingComponent } from './data-binding/data-binding.component'
import { MeuFormModule } from './data-binding/meu-form/meu-form.module';
import { InputPropertyComponent } from './data-binding/input-property/input-property.component';
import { OutputPropertyComponent } from './data-binding/output-property/output-property.component';
import { InterpolationComponent } from './data-binding/interpolation/interpolation.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    InterpolationComponent,
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
