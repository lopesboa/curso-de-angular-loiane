import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormComponent } from './meu-form/meu-form.component';



@NgModule({
  declarations: [DataBindingComponent, CicloComponent,
    ClassBindingComponent, EventBindingComponent,
    OutputPropertyComponent, InputPropertyComponent,
    InterpolationComponent, PropertyBindingComponent, MeuFormComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [DataBindingComponent]
})
export class DataBindingModule { }
