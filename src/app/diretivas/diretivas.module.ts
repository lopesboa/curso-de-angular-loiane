import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';

@NgModule({
  declarations: [DiretivasComponent, DiretivaNgifComponent, DiretivaNgswitchComponent],
  imports: [CommonModule],
  exports: [DiretivasComponent],
})
export class DiretivasModule {}
